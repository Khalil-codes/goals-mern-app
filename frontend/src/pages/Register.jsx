import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useAuth } from "../redux/store";
import { registerUser, reset } from "../redux/auth/authSlice";
import { useEffect } from "react";
import Spinner from "../components/Spinner";

const Register = () => {
    const { user, isLoading, isSuccess, isError, message } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

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
        if (password !== password2) {
            toast.error("Password do not match");
        } else {
            const userData = {
                name,
                email,
                password,
            };
            dispatch(registerUser(userData));
        }
    };
    if (isLoading) return <Spinner />;
    return (
        <>
            <section className="heading">
                <h1>
                    <FaUser /> Register
                </h1>
                <p>Please Create an Account</p>
            </section>
            <section className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter Name"
                            required
                        />
                    </div>
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
                        <input
                            type="password"
                            className="form-control"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            placeholder="Confirm Password"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Register</button>
                    </div>
                </form>
            </section>
        </>
    );
};

export default Register;
