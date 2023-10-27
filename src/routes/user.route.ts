import express from 'express';
const router = express.Router();
import {
  signUp,
  signIn,
  getAllUser,
  getUser,
  updateUser,
  deleteUser,
  logout
} from '../controller/user.controller';

import {
  validateSignUpRequest,
  validateSignInRequest,
  validateGetUserById,
  validateUpdateUser,
  validateDeleteUser
 }
 from '../validator/auth.validator';

import { isRequestValidated } from '../middleware/validateRequest';
import authenticate from '../middleware/auth';

router.post('/signUp', validateSignUpRequest, isRequestValidated, signUp);
router.post('/signIn', validateSignInRequest, isRequestValidated, signIn);
router.get('/getAllUser', authenticate, getAllUser);
router.get('/getUserById/:id', authenticate, validateGetUserById, isRequestValidated, getUser);
router.put('/updateUser/:id', authenticate, validateUpdateUser, isRequestValidated, updateUser);
router.delete('/deleteUser/:id', authenticate, validateDeleteUser, isRequestValidated, deleteUser);
router.post('/logout', authenticate, logout);

export default router;
