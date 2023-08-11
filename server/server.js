require('dotenv').config();

const express = require('express');
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

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
})


