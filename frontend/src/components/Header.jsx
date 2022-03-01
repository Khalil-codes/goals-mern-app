import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout, reset } from "../redux/auth/authSlice";
import { useAuth } from "../redux/store";

const Header = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());
        navigate("/");
    };
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">Goalsy</Link>
            </div>
            <ul>
                {!user ? (
                    <>
                        <li>
                            <Link to="/login">
                                <FaSignInAlt /> Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register">
                                <FaUser /> Register
                            </Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <span>{user?.name}</span>
                        </li>
                        <li>
                            <button className="btn" onClick={handleLogout}>
                                <FaSignOutAlt /> Logout
                            </button>
                        </li>
                    </>
                )}
            </ul>
        </header>
    );
};

export default Header;
