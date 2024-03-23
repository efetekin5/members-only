const asynchHandler = require('express-async-handler');

exports.createNewMessageGet = asynchHandler(async (req, res, next) => {
    res.render('message');
})