const asyncHandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');
const User = require('../models/user');

exports.joinTheClubGet = (req, res, next) => {
    res.render('joinTheClub');
}

exports.joinTheClubPost = [
    body('secretCode')
        .notEmpty(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        if(!errors.isEmpty()) {
            res.render('joinTheClub', {
                errorMsg: 'Invalid Secret Code',
            });
        } else {
            if(req.body.secretCode === 'the odin project') {
                const currentUser = await User.findOne({_id: req.user.id}).exec();
                currentUser.membershipStatus = true;

                await currentUser.save();
                res.redirect('/');
            }
        }
    })
]