const models = require('../models');

const getHomepage = (req, res) => {
  res.send('Hello World!');
};

const getNewTodoPage = (req, res) => {
  res.render('todos-new');
};

const createNewTodo = (req, res) => {
  const { todo } = req.body;

  models.createNewTodo(todo);
  res.status(201).send({ message: 'Todo created!', todo });
};

const catchAll = (req, res) => {
  res.status(404).send('Not found');
};

module.exports = { getHomepage, getNewTodoPage, createNewTodo, catchAll };
