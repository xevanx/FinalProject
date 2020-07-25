const db = require('../models/')

module.exports = {
    findAll: function(req, res) {
        db.Tetris
          .find({})
          .then (dbModel => {
            res.json(dbModel)})
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Tetris
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      createTetris: function({body}, res) {
        console.log(body)
        db.Tetris
          .create(body).then(()=> res.json({message: "success", body}))
          // .then(dbModel => res.json(dbModel))
          // .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Tetris
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}