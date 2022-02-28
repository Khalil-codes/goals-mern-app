const express = require("express");
const router = express.Router();

const {
    getGoals,
    updateGoal,
    setGoal,
    deleteGoal,
    getGoalById,
} = require("../controller/goalController");
const protect = require("../middleware/authMiddleware");

router.get("/", protect, getGoals);
router.post("/", protect, setGoal);
router.get("/:id", protect, getGoalById);
router.patch("/:id", protect, updateGoal);
router.delete("/:id", protect, deleteGoal);

module.exports = router;
