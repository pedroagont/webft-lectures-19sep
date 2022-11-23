const express = require('express');
const router = express.Router();
const { IndexController } = require('../controllers');

router.get('/', IndexController.getRoot);
router.get('/home', IndexController.getHomepage);

module.exports = router;
