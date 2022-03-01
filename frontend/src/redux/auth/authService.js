import axios from "axios";
const API_URL = "http://localhost:5000/api/users";

const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
    }
    return response.data.data.user;
};
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
    }
    return response.data.data.user;
};
const logout = async () => {
    localStorage.removeItem("user");
};

const authService = {
    login,
    register,
    logout,
};

export default authService;
