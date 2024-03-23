const express = require('express');
const router = express.Router();
const messageController = require('../controllers/messageController');

router.get('/', messageController.createNewMessageGet);

router.post('/', messageController.createNewMessagePost);

module.exports = router;