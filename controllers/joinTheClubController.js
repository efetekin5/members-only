const asyncHandler = require('express-async-handler');
const {body, validationResult} = require('express-validator');
const User = require('../models/user');

exports.joinTheClubGet = (req, res, next) => {
    res.render('joinTheClub', {
        title: 'Enter the secret code to join the club'
    });
}

exports.joinTheClubPost = [
    body('secretCode')
        .notEmpty(),

    asyncHandler(async (req, res, next) => {
        const error = validationResult(req);

        if(!error.isEmpty()) {
            res.render('joinTheClub', {
                errorMessage: 'Invalid Secret Code',
            });
        } else {
            if(req.body.secretCode === 'members only') {
                const currentUser = await User.findOne({_id: req.user.id}).exec();
                currentUser.membershipStatus = true;

                await currentUser.save();
                res.redirect('/');
            } else {
                res.render('joinTheClub', {
                    title: 'Invalid Secret Code',
                })
            }
        }
    })
]