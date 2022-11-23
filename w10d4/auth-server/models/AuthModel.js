const bcrypt = require('bcryptjs');
const db = require('../db');

const register = newUser => {
  // Creating new user id
  const id = Math.random()
    .toString(36)
    .substr(2, 3);

  db['usersDB'].push({ id, ...newUser });

  return { id, ...newUser };
};

const getByEmail = email => {
  return db['usersDB'].find(u => u.email === email);
};

const login = (email, password) => {
  // Existing user validation
  const user = db['usersDB'].find(u => u.email === email);
  if (!user) {
    return false;
  }

  // Passwords matching validation
  const passwordsMatch = bcrypt.compareSync(password, user.password);
  if (!passwordsMatch) {
    return false;
  }

  return user;
};

module.exports = { register, getByEmail, login };
