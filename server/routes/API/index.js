const router = require("express").Router();
const userRoutes = require("./userRoutes");
const snakeRoutes = require("./snakeRoutes");
const tetrisRoutes = require("./tetrisRoutes");
const minesweeperRoutes = require("./minesweeperRoutes");

router.use("/user", userRoutes);
router.use("/snake", snakeRoutes);
router.use("/tetris", tetrisRoutes);
router.use("/minesweeper", minesweeperRoutes);

module.exports = router;