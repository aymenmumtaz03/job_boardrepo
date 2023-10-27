import express from 'express';
import  router from './routes/index';
const App = express();

App.use(express.json());

App.get('/', (req:any, res:any) => {
  res.send('Hello World from express');
});

// app.use((_req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type Cache-Control');
//   res.header('Cache-Control', 'max-age=0');
//   next();
// });
App.use('/', router);

App.listen(8000, () => {
  console.log('Application is running on port 8000');
});

