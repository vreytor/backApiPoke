const express = require("express");
const userSchema = require("../models/pokemon");

const router = express.Router();

// create user
router.post("/favoritos", (req, res) => {
    const user = userSchema(req.body);
    user
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.get("/favoritos", (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});

// get all pokemons by user
router.get("/favoritos/:user_id", (req, res) => {
    const { user_id } = req.params;
    userSchema
      .find({user_id: user_id})
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});


// get a pokemon by user_id
router.get("/favoritos/:user_id/:name", (req, res) => {
    const { user_id } = req.params;
    const { name } = req.params;
    userSchema
        .find({user_id: user_id})
        .findOne({name: name})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// update a user
router.put("/favoritos/:id", (req, res) => {
    const { id } = req.params;
    const { name, img, type } = req.body;
    userSchema
        .updateOne({ _id: id }, { $set: {name, img, type} } )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});


// delete a user
router.delete("/favoritos/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
  


module.exports = router;