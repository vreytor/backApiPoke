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

// get all users
router.get("/favoritos", (req, res) => {
    userSchema
      .find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
});


// get a user
router.get("/favoritos/:id", (req, res) => {
    const { id } = req.params;
    userSchema
        .findById(id)
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
