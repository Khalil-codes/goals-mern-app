import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useAuth } from "./redux/store";
const App = () => {
    const { user } = useAuth();
    return (
        <>
            <Router>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route
                            path="/"
                            exact
                            element={
                                !user ? <Navigate to="/login" /> : <Dashboard />
                            }
                        />
                        <Route
                            path="/login"
                            element={user ? <Navigate to="/" /> : <Login />}
                        />
                        <Route
                            path="/register"
                            element={user ? <Navigate to="/" /> : <Register />}
                        />
                    </Routes>
                </div>
            </Router>
            <ToastContainer />
        </>
    );
};

export default App;
