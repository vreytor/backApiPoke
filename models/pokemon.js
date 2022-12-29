const { Schema, model } = require('mongoose');

const FavoritoSchema = Schema({
    user_id: {
        type: String
    },
    name: {
        type: String,
        unique: true
    },
    img: {
        type: String
    },
    type: {
        type: String
    }
});

module.exports = model( 'Pokemon' , FavoritoSchema );