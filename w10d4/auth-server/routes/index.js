const express = require('express');
const router = express.Router();

const IndexRoutes = require('./IndexRoutes');
const AuthRoutes = require('./AuthRoutes');
const FruitsRoutes = require('./FruitsRoutes');

router.use('/', IndexRoutes);
router.use('/api/auth', AuthRoutes);
router.use('/api/fruits', FruitsRoutes);

// Catch all route
router.use((req, res) => {
  res.status(404).send({ message: 'URL Not found' });
});

module.exports = router;
