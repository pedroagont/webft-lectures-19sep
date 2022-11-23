const express = require('express');
const router = express.Router();
const {
  getHomepage,
  getNewTodoPage,
  createNewTodo,
  catchAll
} = require('../controllers');

router.get('/', getHomepage);

router.get('/todos/new', getNewTodoPage);

router.post('/api/todos', createNewTodo);

router.use('*', catchAll);

module.exports = router;
