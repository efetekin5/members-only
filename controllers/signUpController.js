const asyncHandler = require('express-async-handler')
const {body, validationResult} = require('express-validator')
const User = require('../models/user')
const bcrypt = require('bcryptjs')

exports.signUpGet = asyncHandler(async (req, res, next) => {
    res.render('signUp')
})

exports.signUpPost = [
    body('username')
        .trim()
        .isLength({min: 1})
        .withMessage('Please enter minimum 1 character')
        .escape(),
    body('email')
        .trim()
        .isEmail()
        .withMessage('Please enter a valid email'),
    body('password')
        .isLength({min: 2})
        .withMessage('Please enter minimum 2 characters'),
    body('passwordConfirmation').custom((value, {req}) => {
        if(req.body.password != value) {
            throw new Error('Password confirmation does not match the password')
        }

        return true;
    }),

    asyncHandler( (req, res, next) => {
        const errors = validationResult(req);

        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        const passwordConfirmation = req.body.passwordConfirmation;
        const membershipStatus = false;

        if(!errors.isEmpty()) {
            console.log(errors)
            res.render('signUp', {
                username: username,
                email: email,
                password: password,
                passwordConfirmation: passwordConfirmation,
                errors: errors.errors,
            })
        } else {
            bcrypt.hash(req.body.password, 10, async (err, hashedPassword) => {
                if(err) {
                    res.status(500).send('Error hashing password')
                }

                const newUser = new User({
                    username: username,
                    email: email,
                    password: hashedPassword,
                    membershipStatus: membershipStatus,
                    admin: false,
                })

                try {
                    await newUser.save();
                    res.redirect('/log-in');
                }
                catch(error) {
                    res.status(500).send('Error trying to save the new user', error)
                }
            });
        }
    })
]