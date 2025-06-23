import { Router } from 'express';
import { ExampleController } from '../controllers/example.controller';

const router = Router();
const exampleController = new ExampleController();

router.get('/', exampleController.getAll);
router.get('/:id', exampleController.getById);
router.post('/', exampleController.create);
router.put('/:id', exampleController.update);
router.delete('/:id', exampleController.delete);

export { router as exampleRouter }; 