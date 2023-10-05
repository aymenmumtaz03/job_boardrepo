const express = require('express');
const  router = express.Router();


router.get('/getUser', (req,res) => {
    res.send("Displaying the user's list");
});

module.exports = router;