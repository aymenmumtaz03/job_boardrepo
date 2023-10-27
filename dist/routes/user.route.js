"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const user_controller_1 = require("../controller/user.controller");
const auth_validator_1 = require("../validator/auth.validator");
const validateRequest_1 = require("../middleware/validateRequest");
const auth_1 = __importDefault(require("../middleware/auth"));
router.post('/signUp', auth_validator_1.validateSignUpRequest, validateRequest_1.isRequestValidated, user_controller_1.signUp);
router.post('/signIn', auth_validator_1.validateSignInRequest, validateRequest_1.isRequestValidated, user_controller_1.signIn);
router.get('/getAllUser', auth_1.default, user_controller_1.getAllUser);
router.get('/getUserById/:id', auth_1.default, auth_validator_1.validateGetUserById, validateRequest_1.isRequestValidated, user_controller_1.getUser);
router.put('/updateUser/:id', auth_1.default, auth_validator_1.validateUpdateUser, validateRequest_1.isRequestValidated, user_controller_1.updateUser);
router.delete('/deleteUser/:id', auth_1.default, auth_validator_1.validateDeleteUser, validateRequest_1.isRequestValidated, user_controller_1.deleteUser);
router.post('/logout', auth_1.default, user_controller_1.logout);
exports.default = router;
