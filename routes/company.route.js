const express = require('express');
const  router = express.Router();

router.get('/company/get',(req,res) => {
    res.send ('company options')
});

 router.post('/createCompany')

module.exports = router;