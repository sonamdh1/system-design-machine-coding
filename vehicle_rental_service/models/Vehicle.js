export class Vehicle {
    constructor(license_plate, parking_spot) {
        this.license_plate = license_plate;
        this.parking_spot = parking_spot
        this.rate = 0;
        this.parkings = [];
    }
    getVehicleType() {
        return this.type;
    }
}

export class TwoWheeler extends Vehicle {
    constructor(license_plate, parking_spot) {
        super(license_plate, parking_spot);
        this.pricePerHour = 20;
        this.type = 'TwoWheeler';
    }
}

export class HatchbackCar extends Vehicle {
    constructor(license_plate, parking_spot) {
        super(license_plate, parking_spot);
        this.pricePerHour = 30;
        this.type = 'HatchbackCar';
    }
}

export class SUVCar extends Vehicle {
    constructor(license_plate, parking_spot) {
        super(license_plate, parking_spot);
        this.pricePerHour = 40;
        this.type = 'SUVCar';
    }
}