import express from 'express';
const router = express.Router();

router.get('/getJobPost', (req, res) => {
  res.send('displaying the job posts');
});

export default router;
