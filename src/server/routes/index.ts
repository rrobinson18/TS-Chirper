import * as express from 'express';
import apiRouter from './api/chirps';

const router = express.Router();

router.use('/api', apiRouter);

export default router;