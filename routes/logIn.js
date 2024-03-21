const express = require('express');
const router = express.Router();
const logInController = require('../controllers/logInController');

router.get('/', logInController.logInGet);

module.exports = router;