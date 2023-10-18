const express = require('express');
const router = express.Router();
const { signUp, signIn, getAllUser, getUser, updateUser, deleteUser, logout } = require('../controller/user.controller');

const {
  validateSignUpRequest,
  validateSignInRequest,
  validateGetUserById,
  validateUpdateUser,
  validateDeleteUser,
} = require('../validator/auth.validator');
const { isRequestValidated } = require('../middleware/validateRequest');
const authenticate = require('../middleware/auth');

router.post('/signUp', validateSignUpRequest, isRequestValidated, signUp);
router.post('/signIn', validateSignInRequest, isRequestValidated, signIn);
router.get('/getAllUser', authenticate, getAllUser);
router.get('/getUserById/:id', authenticate, validateGetUserById, isRequestValidated, getUser);
router.put('/updateUser/:id', authenticate, validateUpdateUser, isRequestValidated, updateUser);
router.delete('/deleteUser/:id', authenticate, validateDeleteUser, isRequestValidated, deleteUser);
router.post('/logout', authenticate, logout);

module.exports = router;
