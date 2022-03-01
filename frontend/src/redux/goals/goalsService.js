import axios from "axios";

const API_URL = "http://localhost:5000/api/goals";
const createGoal = async (goalData, token) => {
    const response = await axios.post(API_URL, goalData, {
        headers: {
            // prettier-ignore
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.data.goal;
};
const getGoals = async (token) => {
    const response = await axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.data.goals;
};
const deleteGoal = async (id, token) => {
    const response = await axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data.id;
};
const goalsService = {
    createGoal,
    getGoals,
    deleteGoal,
};

export default goalsService;
