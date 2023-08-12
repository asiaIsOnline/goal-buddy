const express = require('express');
const Goal = require('../models/goalModel')

const router = express.Router();

// GET all goals
router.get('/', (req, res) => {
    res.json({msg: 'GET all goals'})
})

// GET a single goal
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single goal'})
})

// POST a new goal
router.post('/', async (req, res) => {
    // Leave out startDate to get the current date as default
    const {title, description, startDate, dueDate} = req.body
    
    try {
        const goal = await Goal.create({title, description, startDate, dueDate});
        res.status(200).json(goal)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a goal
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a goal'})
})

// UPDATE a goal
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a goal'})
})

module.exports = router