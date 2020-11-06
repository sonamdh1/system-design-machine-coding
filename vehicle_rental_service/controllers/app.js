import ParkingLotManagement from '../models/ParkingLotManagement.js';

export default {
    addParkingLots(req, res) {
        let parking_lot = {
            lotId: '1',
            capacity: 5,
            spots: [
                {
                    spotId: 1,
                    level: 1,
                    size: 'small'
                },
                {
                    spotId: 2,
                    level: 1,
                    size: 'medium'
                },
                {
                    spotId: 3,
                    level: 1,
                    size: 'large'
                },
                {
                    spotId: 4,
                    level: 1,
                    size: 'small'
                },
                {
                    spotId: 5,
                    level: 1,
                    size: 'medium'
                }
            ]
        }
        let lot = ParkingLotManagement.addParkingLots(parking_lot);
        console.log('Lot created', lot);
        return res.json(lot);
    },
    parkVehicle(req, res) {
        let license_plate = req.query.license_plate,
            lotId = req.query.lotId,
            vehicleType = req.query.vehicleType;
        
        let response = ParkingLotManagement.parkVehicle(lotId, license_plate, vehicleType);
        res.json(response);
    },
    exitParking(req, res) {
        let license_plate = req.query.license_plate,
            lotId = req.query.lotId;
        res.json(ParkingLotManagement.exitParking(lotId, license_plate));
    },
    getVehicleParkingHistory(req, res) {
        let license_plate = req.query.license_plate;
        res.json(ParkingLotManagement.getVehicleParkingHistory(license_plate));
    }
}
