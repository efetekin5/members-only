const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    title: {type: String},
    timeStamp: {type: Date},
    message: {type: String},
})

module.exports = mongoose.model('Message', messageSchema);