const express = require('express');
const app = express();
const routes = require('./routes/index');
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World from express');
});

// app.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type Cache-Control');
//   res.header('Cache-Control', 'max-age=0');
//   next();
// });
app.use('/', routes);

app.listen(8000, () => {
  console.log('Application is running on port 8000');
});
