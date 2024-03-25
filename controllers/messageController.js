const asyncHandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');
const Message = require('../models/message');
const User = require('../models/user');

exports.createNewMessageGet = asyncHandler((req, res, next) => {
    res.render('message');
})

exports.createNewMessagePost = [
    body('title')
        .trim()
        .isLength({min: 1})
        .escape(),
    body('message')
        .trim()
        .isLength({min: 1})
        .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const title = req.body.title;
        const message = req.body.message;

        if(!errors.isEmpty()) {
            res.render('message', {
                title: title,
                message: message,
            })
        } else {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleDateString('en-GB')
            const hours = currentDate.getHours();
            const formattedHours = hours < 10 ? '0' + hours : hours;
            const minutes = currentDate.getMinutes();
            const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

            const finalDateFormat = `${formattedHours}:${formattedMinutes} - ${formattedDate}`;

            const newMessage = new Message({
                title: title,
                message: message,
                timeStamp: finalDateFormat,
                user: req.user,
            })

            await newMessage.save();
            res.redirect('/');
        }
    })
]