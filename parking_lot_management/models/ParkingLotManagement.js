import { ParkingLot } from './ParkingLot.js';
import { SmallSpot, MediumSpot,LargeSpot } from './ParkingSpot.js';
import { TwoWheeler, HatchbackCar, SUVCar } from './Vehicle.js';

class ParkingLotManagement {
    constructor() {
        this.parking_lots = [];
        this.vehicles = [];
    }
    addParkingLots(parkingLot) {
        let smallSpots = [],
            mediumSpots = [],
            largeSpots = [];
        
        let new_spot;

        parkingLot.spots.forEach(spot => {
            switch(spot.size) {
                case 'small':
                    new_spot = new SmallSpot(spot.spotId, parkingLot.lotId, spot.level);
                    smallSpots.push(new_spot);
                    break;
                case 'medium':
                    new_spot = new MediumSpot(spot.spotId, parkingLot.lotId, spot.level);
                    mediumSpots.push(new_spot);
                    break;
                case 'large':
                    new_spot = new LargeSpot(spot.spotId, parkingLot.lotId, spot.level);
                    largeSpots.push(new_spot);
                    break;
                default:
                    console.log('Spot size is not supported!');
            }
        });

        let lot = new ParkingLot(parkingLot.lotId, parkingLot.capacity);
        lot.smallSpots = smallSpots;
        lot.mediumSpots = mediumSpots;
        lot.largeSpots = largeSpots;
        this.parking_lots.push(lot);
        return lot;
    }
    parkVehicle(parkingLotId, vehicleId, vehicleType) {
        // create vehicle model
        // fetch parking lot
        // check capacity
        // if capacity 0, return error
        // based on capacity get spot from spot Queue
        // decrement capacity
        // set parking spot as unavailable
        // set vehicle spot
        // set spot occupy start time

        let vehicle = this.fetchVehicle(vehicleId),
            parkingLot = this.fetchParkingLot(parkingLotId);

        if(!parkingLot) {
            return {
                status: 404,
                message: 'Parking Lot does not exist'
            }
        }

        if(!vehicle) {
            vehicle = this.addVehicle(vehicleId, vehicleType);
            this.vehicles.push(vehicle);
        }
        if(parkingLot.capacity === 0) {
            return {
                status: 200,
                message: 'Parking Lot is fully occupied!'
            }
        }
        let spot = this.getSpotForVehicleType(parkingLot, vehicle.type);
        if(vehicle && spot) {
            parkingLot.capacity--;
            spot.available = false;
            vehicle.parking_spot = spot;
            spot.occupy_start_time = new Date().getHours();
        }
        return {
            status: 200,
            message: 'Parking Spot booked!',
            data: spot
        }
    }
    exitParking(parkingLotId, vehicleId) {
        // fetch vehicle
        // get vehicle spot
        // get spot lot
        // get rate - vehicle.pricePerHour * (spot.occupy_end_time - spot.occupy_start_time)
        // based on spot size, add to respective lot queue
        // increment capacity
        // remove parking from vehicle
        // add parking to vehicle parkings
        // return rate

        let rate = 0
        let vehicle = this.fetchVehicle(vehicleId),
            parkingLot = this.fetchParkingLot(parkingLotId);

        if(!parkingLot) {
            return {
                status: 404,
                message: 'Parking Lot does not exist'
            }
        }

        
        if(vehicle) {
            let spot = vehicle.parking_spot;
            if(spot) {
                let time = new Date().getHours();
                spot.occupy_end_time = time;
                rate = vehicle.pricePerHour * (spot.occupy_end_time - spot.occupy_start_time);
                this.freeParkingSpot(parkingLot, spot);
                vehicle.parking_spot = '';
                vehicle.parkings.push(spot);
            }
        }  
        return {
            status: 200,
            data: rate
        }
    }
    getVehicleParkingHistory(vehicleId) {
        // fetch vehicle
        // return vehcile parkings

        let vehicle = this.fetchVehicle(vehicleId)
        if(!vehicle) {
            return {
                status: '200',
                message: 'Vehicle does not exist in DB'
            }
        }
        return {
            status: 200,
            data: vehicle.parkings
        };
    }

    fetchVehicle(vehicleId) {
        let vehicle;
        this.vehicles.forEach(veh => {
            if(veh.license_plate === vehicleId) {
                vehicle = veh;
                return vehicle;
            }
        })
        return vehicle;
    }
    fetchParkingLot(lotId) {
        let lot;
        this.parking_lots.forEach(lt => {
            if(lt.lotId === lotId) {
                lot = lt;
                return lot;
            }
        })
        return lot;
    }
    addVehicle(vehicleId, vehicleType) {
        switch(vehicleType) {
            case 'TwoWheeler':
                return new TwoWheeler(vehicleId);
            case 'HatchbackCar':
                return new HatchbackCar(vehicleId);
            case 'SUVCar':
                return new SUVCar(vehicleId);
            default:
                console.log('Vehicle type is not supported');
                return;
        }
    }
    getSpotForVehicleType(parkingLot, vehicleType) {
        switch(vehicleType) {
            case 'TwoWheeler':
                if(parkingLot.smallSpots.length > 0) {
                    return parkingLot.smallSpots.shift();
                }
            case 'HatchbackCar':
                if(parkingLot.mediumSpots.length > 0) {
                    return parkingLot.mediumSpots.shift();
                }
            case 'SUVCar':
                if(parkingLot.largeSpots.length > 0) {
                    return parkingLot.largeSpots.shift();
                }
            default:
                return;
        }
    }
    freeParkingSpot(parkingLot, spot) {
        switch(spot.size) {
            case 'small':
                parkingLot.smallSpots.push(spot);
                break
            case 'medium':
                parkingLot.mediumSpots.push(spot);
                break;
            case 'large':
                parkingLot.largeSpots.push(spot);
                break;
            default:
                return;
        }
        parkingLot.capacity++;
    }
}

export default new ParkingLotManagement();