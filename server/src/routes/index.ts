import { Router } from 'express';
import { exampleRouter } from './example.routes';

const router = Router();

// Mount routes
router.use('/example', exampleRouter);

export { router as routes }; 