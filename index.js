const express = require('express');
const app = express();
const userRoutes = require('./routes/user');
const jobpostRoutes = require('./routes/jobpost');


app.get('/',(req,res) => {
    res.send("Hello World from express");
})

app.use('/users',userRoutes);
app.use('/job',jobpostRoutes)

app.listen(8000,() => {
    console.log("Application is running on port 8000");
})