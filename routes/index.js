const express = require('express');
const router = express.Router();
const Message = require('../models/message');
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.displayAllMessages);

module.exports = router;
