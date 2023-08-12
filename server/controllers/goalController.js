const Goal = require('../models/goalModel');
const mongoose = require('mongoose');

// GET all goals
const getAllGoals = async(req, res) => {
    // Shows all goals sorted by newest first
    const goals = await Goal.find({}).sort({createdAt: -1});

    res.status(200).json(goals);
}

// GET a single goal
const getSingleGoal = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'This goal does not exist... :('})
    }

    const goal = await Goal.findById(id);

    if(!goal) {
        return res.status(404).json({error: 'This goal does not exist... :('})
    }

    res.status(200).json(goal);
}

// POST a new goal
const postGoal = async(req, res) => {
    const {title, description, startDate, dueDate} = req.body;
    
    // Add goal to database
    // Leave out startDate to get the current date as default
    try {
        const goal = await Goal.create({title, description, startDate, dueDate});
        res.status(200).json(goal)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// DELETE a goal
const deleteGoal = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'This goal does not exist... :('})
    }

    const goal = await Goal.findOneAndDelete({ _id: id }) 

    if (!goal) {
        return res.status(404).json({error: 'This goal does not exist... :('})
    }

    res.status(200).json(goal);
}

// UPDATE a goal
const updateGoal = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'This goal does not exist... :('})
    }

    const goal = await Goal.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!goal) {
        return res.status(404).json({error: 'This goal does not exist... :('})
    }

    res.status(200).json(goal);
}

module.exports = {
    getAllGoals,
    getSingleGoal,
    postGoal,
    deleteGoal,
    updateGoal
}