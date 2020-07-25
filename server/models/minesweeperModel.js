const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const minesweeperSchema = new Schema({
    userName: {type: String },
    score: {type: Number},
    date: { type: Date, default: Date.now }
});

const Minesweeper = mongoose.model('minesweeper', minesweeperSchema);

module.exports = Minesweeper;