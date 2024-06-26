const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    membershipStatus: {type: Boolean, required: true},
    admin: {type: Boolean, required: true}
})

module.exports = mongoose.model('User', userSchema);