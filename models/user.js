const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {type: String},
    email: {type: String},
    password: {type: String},
    memberShipStatus: {type: Boolean},
})

module.exports = mongoose.model('User', userSchema);