require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const goalRoutes = require('./routes/goals');

// Create express app
const app = express()

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.use('/api/goals', goalRoutes)

// Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to database and listening on port', process.env.PORT);
        })
    })
    .catch((error) => {
        console.log(error)
    })


