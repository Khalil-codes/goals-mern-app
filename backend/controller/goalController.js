const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel");

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json({
        status: "success",
        result: goals.length,
        data: { goals },
    });
});

// @desc    Get goal
// @route   GET /api/goals/:id
// @access  Private
const getGoalById = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    res.status(200).json({ status: "success", data: { goal } });
});

// @desc    Set goals
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add text field");
    }
    const goal = await Goal.create({
        text: req.body.text,
    });
    res.status(200).json({ status: "success", data: { goal } });
});

// @desc    Update goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if (!goal) {
        res.status(400);
        throw new Error("Goal Not Found");
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.status(200).json({ status: "success", data: { goal: updatedGoal } });
});

// @desc    Delete goals
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    await Goal.findByIdAndDelete(req.params.id);
    res.status(200).json({ id: req.params.id });
});

module.exports = { getGoals, getGoalById, setGoal, updateGoal, deleteGoal };
