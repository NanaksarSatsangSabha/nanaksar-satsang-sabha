const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/auth');

// Dashboard route // Will try to protect the route. Still figuring this part out
router.get('/', authMiddleware.verifyToken, dashboardController.getDashboard);

module.exports = router;