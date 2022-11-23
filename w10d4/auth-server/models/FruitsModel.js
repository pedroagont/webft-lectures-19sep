const db = require('../db');

const create = fruit => {
  const { name, color, emoji, userId } = fruit;
  // Creating fruit object in DB
  let id = Math.random()
    .toString(36)
    .substr(2, 3);

  db['fruitsDB'][id] = {
    id,
    name,
    color,
    emoji,
    userId
  };

  return db['fruitsDB'][id];
};

const getAll = () => {
  return db['fruitsDB'];
};

const getById = id => {
  return db['fruitsDB'][id];
};

const update = (id, updatedFruit) => {
  const { name, color, emoji, userId } = updatedFruit;

  db['fruitsDB'][id] = {
    id,
    name,
    color,
    emoji,
    userId
  };

  return db['fruitsDB'][id];
};

const remove = id => {
  delete db['fruitsDB'][id];
};

module.exports = { create, getAll, getById, update, remove };
