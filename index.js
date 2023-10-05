// eslint-disable-next-line no-undef
const express = require('express');
const app = express();
// eslint-disable-next-line no-undef
const userRoutes = require('./routes/user');
// eslint-disable-next-line no-undef
const jobpostRoutes = require('./routes/jobpost');


app.get('/',(req,res) => {
    res.send("Hello World from express");
})

let a = 10;
app.use('/users',userRoutes);
app.use('/job',jobpostRoutes)

app.listen(8000,() => {
    console.log("Application is running on port 8000");
})