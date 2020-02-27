require('dotenv').config();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

async function createUser(req, res) {
  try {
    const getUserId = await generateUserId();
    let user = req.body;
    user['_id'] = getUserId;
    user.password = await bcrypt.hash(user.password, saltRounds);
    const response = await User.create(user);
    res.send(response);
  } catch (error) {
    res.send(error);
  }
}
async function deleteUser(req, res) {
  const response = await User.deleteMany({});
  res.send(response);
}

async function generateUserId() {
  try {
    const data = await User.find({}, (err, response) => {})
      .sort({ _id: -1 })
      .limit(1);
    if (data.length) {
      let id = data[0]['_id'].split('_');
      id = (parseInt(id[1]) + 1).toString().padStart(6, '0');
      return `user_${id}`;
    } else {
      return 'user_000001';
    }
  } catch (error) {
    res.send(error);
  }
}
async function validateUser(req, res) {
  try {
    const query = req.body;
    const user = await User.find({ email: query.email }).limit(1);
    const dbPassword = user[0].password;
    const isValid = await bcrypt.compare(query.password, dbPassword);
    if (isValid) {
      const token = newToken(user[0].email);
      const refToken = refreshToken(user[0].email);
      res.send({ token, refreshToken: refToken });
    }
  } catch (error) {
    res.send(error);
  }
}
function newToken(data) {
  return jwt.sign({ data }, process.env.JWT_TOKEN_KEY, { expiresIn: '1h' });
}
function refreshToken(data) {
  return jwt.sign({ data }, process.env.JWT_TOKEN_KEY, { expiresIn: '2h' });
}
async function verifyToken(req, res) {
  const token = req.body.token;
  try {
    const isValid = await jwt.verify(token, process.env.JWT_TOKEN_KEY);
    res.send(isValid);
  } catch (error) {
    res.status(200).send(error);
  }
}
async function fetchAllUsers(req, res) {
  try {
    const users = await User.find({}, (err, res) => {
      return res;
    });
    res.send(users);
  } catch (error) {
    res.send(error);
  }
}

module.exports = {
  fetchAllUsers,
  createUser,
  deleteUser,
  validateUser,
  verifyToken
};
