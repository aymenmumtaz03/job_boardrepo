const express = require ('express');
const router = express.Router();

router.get('/getJobPost', (req,res) => {
  res.send('displaying the job posts')  
});

module.exports = router;