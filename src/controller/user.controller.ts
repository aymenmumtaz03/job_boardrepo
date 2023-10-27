import { StatusCodes } from 'http-status-codes';
import { ERROR_CODES } from '../constants';
const { createUser, validatePassword, getUserById, updateOne, removeUser } = require('../services/user.service');
import jwt from 'jsonwebtoken';
import User from '../models/user';
const { tokenBlacklist } = require('../services/jwt.service');
require('dotenv').config();
import { Request, Response } from 'express';

export const signUp = async (req: Request, res: Response) => {
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

export const signIn = async (req: Request, res: Response) => {
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
    const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET_KEY as string, {
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

export const getAllUser = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUser = async (req: Request, res: Response) => {
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

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payload = req.body;
    const updatedUser = await updateOne(id, payload);

    return res.status(StatusCodes.OK).json({ message: 'User updated successfully', user: updatedUser });
  } catch (error: any) {
    return res.status(ERROR_CODES.BAD_REQUEST).json({ error: error.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const result = await removeUser(id);
    res.status(StatusCodes.OK).json({ message: result });
  } catch (error: any) {
    res.status(ERROR_CODES.BAD_REQUEST).json({ error: error.message });
  }
};

export const logout = async (req: Request, res: Response) => {
  const header = req.headers.authorization;
  if (header) {
    const token = header.split(' ')[1];
    tokenBlacklist.push(token);
    res.json({ message: 'User logout sucessfully' });
  }
};

// export default { signUp, signIn, getAllUser, getUser, updateUser, deleteUser, logout };
