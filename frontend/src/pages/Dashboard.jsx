import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import GoalForm from "../components/GoalForm";
import { getGoals, reset } from "../redux/goals/goalsSlice";
import { useAuth, useGoals } from "../redux/store";
import GoalItem from "../components/GoalItem";

const Dashboard = () => {
    const dispatch = useDispatch();
    const { goals, isLoading, isSuccess, isError, message } = useGoals();
    const { user } = useAuth();
    useEffect(() => {
        const unSub = () => {
            if (isError) console.log(message);
            dispatch(getGoals());
        };
        unSub();
        return () => {
            dispatch(reset());
        };
    }, [dispatch, isError, message]);
    if (isLoading) return <Spinner />;
    return (
        <>
            <section className="heading">
                <h1>Welcome {user?.name}</h1>
                <p>Goals Dashboard</p>
            </section>
            <GoalForm />
            <section className="content">
                {goals.length > 0 ? (
                    <div className="goals">
                        {goals.map((goal) => (
                            <GoalItem key={goal._id} goal={goal} />
                        ))}
                    </div>
                ) : (
                    <h3>You have not set any goals</h3>
                )}
            </section>
        </>
    );
};

export default Dashboard;
