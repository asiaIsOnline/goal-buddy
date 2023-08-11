require('dotenv').config();

const express = require('express');

// Create express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// Routes
app.get('/', (req, res) => {
    res.json({msg: 'Welcome to the app'});
})

// Listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT);
})


