const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const snakeSchema = new Schema({
    userName: {type: String },
    score: {type: Number},
    date: { type: Date, default: Date.now }
});

const Snake = mongoose.model('Snake', snakeSchema);

module.exports = Snake;