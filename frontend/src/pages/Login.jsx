import React, { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser, reset } from "../redux/auth/authSlice";
import { useAuth } from "../redux/store";

const Login = () => {
    const { user, isLoading, isSuccess, isError, message } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        const cb = () => {
            if (isError) {
                toast.error(message);
            }
            if (isSuccess || user) {
                navigate("/");
            }
            dispatch(reset());
        };
        cb();
    }, [user, isError, isSuccess, message, navigate, dispatch]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email,
            password,
        };
        dispatch(loginUser(userData));
        console.log(email, password);
    };
    return (
        <>
            <section className="heading">
                <h1>
                    <FaSignInAlt /> Login
                </h1>
                <p>Please Login to your Account</p>
            </section>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="abc@xyz.com"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter Password"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-block">Login</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Login;
