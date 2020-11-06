import express from 'express';
import controller from '../controllers/app.js';

const router = express.Router();

router.post('/parking_lot', controller.addParkingLots);

router.post('/park_vehicle', controller.parkVehicle);

router.post('/exit_parking', controller.exitParking);

router.get('/vehicle_parking_history', controller.getVehicleParkingHistory);

export default router;