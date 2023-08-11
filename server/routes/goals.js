const express = require('express');

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
router.post('/', (req, res) => {
    res.json({msg: 'POST a new goal'})
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