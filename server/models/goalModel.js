const mongoose = require('mongoose');

const Schema = mongoose.Schema

const goalSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        default: Date.now,
    },
    dueDate: {
        type: Date
    }
}, { timestamps: true })

module.exports = mongoose.model('Goal', goalSchema);