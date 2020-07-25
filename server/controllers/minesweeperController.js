const db = require('../models/')

module.exports = {
    findAll: function(req, res) {
        db.Minesweeper
          .find({})
          .then (dbModel => {
            res.json(dbModel)})
          .catch(err => res.status(422).json(err));
      },
      findById: function(req, res) {
        db.Minesweeper
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      createMinesweeper: function({body}, res) {
        console.log(body)
        db.Minesweeper
          .create(body).then(()=> res.json({message: "success", body}))
          // .then(dbModel => res.json(dbModel))
          // .catch(err => res.status(422).json(err));
      },
      update: function(req, res) {
        db.Minesweeper
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
}