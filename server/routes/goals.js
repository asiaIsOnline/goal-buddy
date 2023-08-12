const express = require('express');
const {
    postGoal, 
    getAllGoals,
    getSingleGoal,
    deleteGoal,
    updateGoal,
} = require('../controllers/goalController');

const router = express.Router();

// GET all goals
router.get('/', getAllGoals) 

// GET a single goal
router.get('/:id', getSingleGoal)

// POST a new goal
router.post('/', postGoal) 

// DELETE a goal
router.delete('/:id', deleteGoal)

// UPDATE a goal
router.patch('/:id', updateGoal)

module.exports = router