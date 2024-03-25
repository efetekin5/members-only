const asyncHandler = require('express-async-handler');
const Message = require('../models/message');

exports.displayAllMessages = asyncHandler(async (req, res, next) => {
    const allMessages = await Message.find().populate('user').exec();

    res.render('index', {
        allMessages: allMessages,
    })
})