const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
    title: {type: String, required: true},
    timeStamp: {type: String, required: true},
    message: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref:'User', required: true}
})

module.exports = mongoose.model('Message', messageSchema);