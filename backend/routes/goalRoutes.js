const express = require("express");
const router = express.Router();

const {
    getGoals,
    updateGoal,
    setGoal,
    deleteGoal,
    getGoalById,
} = require("../controller/goalController");

router.get("/", getGoals);
router.post("/", setGoal);
router.get("/:id", getGoalById);
router.patch("/:id", updateGoal);
router.delete("/:id", deleteGoal);

module.exports = router;
