const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_id: {
        type: String
    },
    name: {
        type: String
    },
    img: {
        type: String
    },
    type: {
        type: String
    }
});

module.exports = mongoose.model('Pokemon', userSchema)