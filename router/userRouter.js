const express = require('express');
const Router = express.Router();

function fetchUsers(req, res) {
  let users = ['one', 'two', 'three'];
  res.send(users);
}
Router.get('/', fetchUsers);

module.exports = Router;
