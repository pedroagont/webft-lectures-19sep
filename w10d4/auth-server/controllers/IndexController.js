const getRoot = (req, res) => {
  res.send('<h1>Hello World! 🐳</h1><p>CRUD /api/fruits</p>');
};

const getHomepage = (req, res) => {
  res.status(200).send('<h1>Homepage!</h1>');
};

module.exports = { getRoot, getHomepage };
