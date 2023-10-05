// eslint-disable-next-line no-undef
const express = require ('express');
const router = express.Router();

router.get('/getJobPost', (req,res) => {
  res.send('displaying the job posts')  
});

// eslint-disable-next-line no-undef
module.exports = router;