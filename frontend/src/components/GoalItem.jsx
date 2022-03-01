import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../redux/goals/goalsSlice";

const GoalItem = ({ goal }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteGoal(goal._id));
    };
    return (
        <div className="goal">
            <div>{new Date(goal.createdAt).toLocaleString("en-IN")}</div>
            <h2>{goal.text}</h2>
            <button className="close" onClick={handleDelete}>
                X
            </button>
        </div>
    );
};

export default GoalItem;
