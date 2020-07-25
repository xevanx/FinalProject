const db = require('../models/')

module.exports = {
    findAll: function(req, res) {
        db.Snake
          .find({})
          .then (dbModel => {
            res.json(dbModel)})
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Snake
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      createSnake: function({body}, res) {
        console.log(body)
        db.Snake
          .create(body).then(()=> res.json({message: "success", body}))
          // .then(dbModel => res.json(dbModel))
          // .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Snake
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}