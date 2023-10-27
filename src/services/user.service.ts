import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import User from '../models/user';
const bcrypt = require('bcrypt');

const createUser = async (userName: string, userEmail: string, password: string) => {
  const hashPassword = await bcrypt.hash(password, 10);
  console.log(hashPassword);
  const data = { name: userName, email: userEmail, password: hashPassword };
  return await User.create(data);
};

const signIn = async (req: Request, res: Response) => {
  if (!req.body.email || !req.body.password) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: 'Please enter email and password',
    });
  }
};

const validatePassword = async (password: any, hashPassword: any) => {
  return bcrypt.compare(password, hashPassword);
};

const getUserById = async (userId: any) => {
  console.log('userId', userId);
  const user = await User.findByPk(userId);
  return user;
};

const updateOne = async (userId: any, newData: { name: any; email: any; password: any; passwordassword: any }) => {
  try {
    const user = await User.findByPk(userId);

    if (!user) {
      throw new Error('User not found');
    }

    if (newData.name) {
      user.name = newData.name;
    }
    if (newData.email) {
      user.email = newData.email;
    }
    if (newData.password) {
      user.password = newData.passwordassword;
    }

    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const removeUser = async (id: any) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error('User not found');
  }
  await user.destroy();
  return 'User deleted successfully';
};

module.exports = { createUser, signIn, validatePassword, getUserById, updateOne, removeUser };
