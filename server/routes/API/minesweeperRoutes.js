const router = require("express").Router();
const {findAll, createMinesweeper} = require("../../controllers/minesweeperController");

router.route("/")
  .get(findAll)
  .post(createMinesweeper);

module.exports = router 