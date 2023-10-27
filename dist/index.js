"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const App = (0, express_1.default)();
App.use(express_1.default.json());
App.get('/', (req, res) => {
    res.send('Hello World from express');
});
// app.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type Cache-Control');
//   res.header('Cache-Control', 'max-age=0');
//   next();
// });
App.use('/', index_1.default);
App.listen(8000, () => {
    console.log('Application is running on port 8000');
});
