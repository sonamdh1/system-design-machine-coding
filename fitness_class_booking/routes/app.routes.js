import express from 'express';
import controller from '../controllers/app.controller.js';

const router = express.Router();

router.post('/users', controller.createUsers);
router.post('/fitness_classes', controller.createFitnessClasses);

router.get('/users', controller.getUsers);
router.get('/fitness_classes', controller.getFitnessClasses);

router.post('/book', controller.bookClass);
router.post('/cancel', controller.cancelClass);

export default router;