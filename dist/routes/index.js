"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION || '/portal';
const router = (0, express_1.Router)();
const user_route_1 = __importDefault(require("./user.route"));
const jobpost_route_1 = __importDefault(require("./jobpost.route"));
const company_route_1 = __importDefault(require("./company.route"));
router.use(`${REACT_APP_API_VERSION}/users`, user_route_1.default);
router.use(`${REACT_APP_API_VERSION}/jobposts`, jobpost_route_1.default);
router.use(`${REACT_APP_API_VERSION}/companies`, company_route_1.default);
exports.default = router;
