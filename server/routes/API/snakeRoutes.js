const router = require("express").Router();
const {findAll, createSnake} = require("../../controllers/snakeController");

router.route("/")
  .get(findAll)
  .post(createSnake);

module.exports = router 