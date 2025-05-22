const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Home Page route
router.get('/', homeController.getHome);

module.exports = router;