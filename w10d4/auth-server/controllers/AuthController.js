const bcrypt = require('bcryptjs');
const { AuthModel } = require('../models');

const register = (req, res) => {
  // Body validation
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send({ message: 'You need to provide email and password to register' });
  }

  // Email is not repeated validation
  const emailExists = AuthModel.getByEmail(email);
  if (emailExists) {
    return res.status(400).send({ message: 'Email already exists' });
  }

  // Hashing password with bcrypt
  const hashedPassword = bcrypt.hashSync(password, 8);

  // Creating new user object
  const newUser = {
    email,
    password: hashedPassword
  };

  // Adding the new user object into the DB
  const user = AuthModel.register(newUser);

  delete user.password;

  // Respond back to client
  res.status(200).send({ message: 'User registered!', user });
};

const login = (req, res) => {
  // Body validation
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send({ message: 'You need to provide email and password to login' });
  }

  const user = AuthModel.login(email, password);
  if (!user) {
    return res.status(401).send({ message: 'Invalid credentials' });
  }

  // Adding the userId cookie
  req.session.userId = user.id;

  // Respond back to client
  res.status(200).send({ message: 'Welcome!' });
};

const logout = (req, res) => {
  // Removing all cookies from current session
  req.session = null;

  // Respond back to client
  res.status(200).send({ message: 'Successfully logout!' });
};

module.exports = { register, login, logout };
