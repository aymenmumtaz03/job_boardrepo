import express, { Router } from 'express';

const REACT_APP_API_VERSION = process.env.REACT_APP_API_VERSION || '/portal';

const router: Router = Router();

import userRoutes from './user.route';
import jobpostRoutes from './jobpost.route';
import companyRoutes from './company.route';

router.use(`${REACT_APP_API_VERSION}/users`, userRoutes);
router.use(`${REACT_APP_API_VERSION}/jobposts`, jobpostRoutes);
router.use(`${REACT_APP_API_VERSION}/company`, companyRoutes);

export default router;
