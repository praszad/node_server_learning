const config = require('dotenv').config;
config();
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
      const token = await jwt.sign(
        { data: user[0] },
        process.env.JWT_TOKEN_KEY
      );
      res.send({ token });
    }
  } catch (error) {
    res.send(error);
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

module.exports = { fetchAllUsers, createUser, deleteUser, validateUser };
