const router = require("express").Router();
const {findAll, createTetris} = require("../../controllers/tetrisController");

router.route("/")
  .get(findAll)
  .post(createTetris);

module.exports = router 