const FruitsModel = require('../models/FruitsModel');

const create = (req, res) => {
  // Cookie validation
  const { userId } = req.session;
  if (!userId) {
    return res
      .status(401)
      .send({ message: 'You need to be logged in to create a fruit' });
  }

  // Body validation
  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to create a fruit' });
  }

  const fruit = FruitsModel.create({ name, color, emoji, userId });

  // Respond back to client
  res.status(201).send({ message: 'Created!', fruit });
};

const getAll = (req, res) => {
  const fruits = FruitsModel.getAll();
  res.status(200).send({ message: 'List of all fruits!', fruits });
};

const getById = (req, res) => {
  // Fruit existing validation
  const fruit = FruitsModel.getById(req.params.id);
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  // Respond back to client
  res.status(200).send({ message: 'Here is your fruit!', fruit });
};

const update = (req, res) => {
  // Cookie validation
  const { userId } = req.session;
  if (!userId) {
    return res
      .status(401)
      .send({ message: 'You need to be logged in to update a fruit' });
  }

  // Body validation
  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to update a fruit' });
  }

  // Fruit existing validation
  let fruit = FruitsModel.getById(req.params.id);
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  // Ownership validation
  const fruitBelongsToUser = fruit.userId === userId;
  if (!fruitBelongsToUser) {
    return res
      .status(403)
      .send({ message: 'You are not the owner of this fruit' });
  }

  const updatedFruit = FruitsModel.update(req.params.id, {
    name,
    color,
    emoji,
    userId
  });
  if (!updatedFruit) {
    return res.status(400).send({ message: 'Error updating fruit' });
  }

  // Respond back to client
  res.status(201).send({ message: 'Updated!', fruit: updatedFruit });
};

const remove = (req, res) => {
  // Cookie validation
  const { userId } = req.session;
  if (!userId) {
    return res
      .status(401)
      .send({ message: 'You need to be logged in to delete a fruit' });
  }

  // Fruit existing validation
  let fruit = FruitsModel.getById(req.params.id);
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  // Ownership validation
  const fruitBelongsToUser = fruit.userId === userId;
  if (!fruitBelongsToUser) {
    return res
      .status(403)
      .send({ message: 'You are not the owner of this fruit' });
  }

  // Deleting fruit object in DB
  FruitsModel.remove(req.params.id);
  res.status(204).send();
};

module.exports = { create, getAll, getById, update, remove };
