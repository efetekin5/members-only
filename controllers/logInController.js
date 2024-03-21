const asyncHandler = require('express-async-handler')

exports.logInGet = asyncHandler(async (req, res, next) => {
    res.render('logIn')
})

