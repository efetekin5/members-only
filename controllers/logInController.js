const asyncHandler = require('express-async-handler')
const passport = require('passport')

exports.logInGet = asyncHandler(async (req, res, next) => {
    res.render('logIn')
})

exports.logInPost = [
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/log-in',
    }),
  ];