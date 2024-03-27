const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/', adminController.newAdminGet);

router.post('/', adminController.newAdminPost);

module.exports = router;