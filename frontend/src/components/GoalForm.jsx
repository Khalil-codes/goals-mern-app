import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../redux/goals/goalsSlice";

const GoalForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createGoal({ text }));
        setText("");
    };
    return (
        <section className="form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Enter Goal..."
                        className="form-control"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-block">Submit</button>
                </div>
            </form>
        </section>
    );
};

export default GoalForm;
