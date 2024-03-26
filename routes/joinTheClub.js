const express = require('express');
const router = express.Router();
const joinTheClubController = require('../controllers/joinTheClubController');

router.get('/', joinTheClubController.joinTheClubGet);

router.post('/', joinTheClubController.joinTheClubPost);

module.exports = router;