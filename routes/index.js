const express = require('express');
const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION || "/portal";
const app = express();
app.use(express.json());

const router = express.Router();


const routes  = [
  require("./user.route"),
  require("./jobpost.route"),
  require("./company.route"),
];

routes.forEach((route) => {
  router.use(`${REACT_APP_API_VERSION}`, route);
});

module.exports = router;
