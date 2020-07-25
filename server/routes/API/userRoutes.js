const router = require("express").Router();
const {findAll, createUser} = require("../../controllers/userController");

router.route("/")
  .get(findAll)
  .post(createUser);


// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;

// make post route and make api call that Web. use reducer. 
// return user handling. 