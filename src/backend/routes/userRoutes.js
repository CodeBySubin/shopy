import { Router } from 'express';
import userController from '../controllers/usercontroller.js';  // Import the default export

const router = Router();

router.get('/', userController.getUsers);       // Access the methods through the object
router.post('/', userController.createUser);

export default router;
