const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tetrisSchema = new Schema({
    userName: {type: String },
    score: {type: Number},
    date: { type: Date, default: Date.now }
});

const Tetris = mongoose.model('Tetris', tetrisSchema);

module.exports = Tetris;