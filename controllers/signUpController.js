const asyncHandler = require('express-async-handler')

exports.signUpGet = asyncHandler(async (req, res, next) => {
    res.render('signUp')
})