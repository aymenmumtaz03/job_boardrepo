const { StatusCodes, BAD_REQUEST } = require('http-status-codes');
const { ERROR_CODES } = require('../constants');
const { User } = require('../models/index');
const { createUser, validatePassword, getUserById, updateOne, removeUser } = require('../services/user.service');
const jwt = require('jsonwebtoken');
const user = require('../models/user');
const { tokenBlacklist } = require('../services/jwt.service');
require('dotenv').config();

const signUp = async (req, res) => {
  const { name, password, email } = req.body;

  const isExist = await User.findOne({ where: { email } });
  if (isExist) {
    return res.status(ERROR_CODES.BAD_REQUEST).json({ message: 'User already exist' });
  }
  const user = await createUser(name, email, password);
  return res.status(201).json({
    data: user,
    message: 'User created sucessfully',
  });
};

const signIn = async (req, res) => {
  const { password, email } = req.body;

  if (!email || !password) {
    res.status(ERROR_CODES.BAD_REQUEST).json({
      message: 'Please enter email and password',
    });
  }

  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return res.status(ERROR_CODES.BAD_REQUEST).json({ message: 'User not found' });
  }

  const isValid = await validatePassword(password, user?.password);
  if (isValid) {
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET_KEY, {
      expiresIn: '10h',
    });
    res.status(StatusCodes.OK).json({
      token,
      user: { id: user.id, name: user.name, email: user.email },
    });
  } else {
    return res.status(StatusCodes.BAD_REQUEST).json({ message: 'Invalid credential provided' });
  }
};

const getAllUser = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    // Call the userService function to retrieve the user
    const user = await getUserById(id);
    console.log(user);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Send the user data in the response
    res.status(200).json({ status: 'success', data: user });
  } catch (error) {
    // Pass the error to the next middleware (error handling middleware)
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const updatedUser = await updateOne(id, payload);

    return res.status(StatusCodes.OK).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error) {
    return res.status(ERROR_CODES.BAD_REQUEST).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await removeUser(id);
    res.status(StatusCodes.OK).json({ message: result });
  } catch (error) {
    res.status(ERROR_CODES.BAD_REQUEST).json({ error: error.message });
  }
};

const logout = async (req, res) => {
  const header = req.headers.authorization;
  if (header) {
    const token = header.split(' ')[1];
    tokenBlacklist.push(token);
    res.json({ message: 'User logout sucessfully' });
  }
};

module.exports = { signUp, signIn, getAllUser, getUser, updateUser, deleteUser, logout };
