const express = require('express');
const router = express.Router();

const { FruitsController } = require('../controllers');

// CRUD Operations
// CREATE - POST
router.post('/', FruitsController.create);

// READ - GET
// Read All
router.get('/', FruitsController.getAll);

// Read One
router.get('/:id', FruitsController.getById);

// UPDATE - PUT
router.put('/:id', FruitsController.update);

// DELETE - DELETE
router.delete('/:id', FruitsController.remove);

module.exports = router;
