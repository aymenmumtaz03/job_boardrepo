// eslint-disable-next-line no-undef
const express = require('express');
const  router = express.Router();


router.get('/getUser', (req,res) => {
    res.send("Displaying the user's list");
});

// eslint-disable-next-line no-undef
module.exports = router;