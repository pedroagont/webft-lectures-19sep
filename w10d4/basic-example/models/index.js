const db = require('../db');

const createNewTodo = todo => {
  db['todosDB'].push(todo);
  console.log(db['todosDB']);
};

module.exports = { createNewTodo };
