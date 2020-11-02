export class ParkingSpot {
    constructor(spotId, lotId, level, occupy_start_time = '', occupy_end_time = '') {
        this.spotId = spotId;
        this.spotLotId = lotId
        this.level = level;
        this.occupy_start_time = occupy_start_time;
        this.occupy_end_time = occupy_end_time;
        this.available = true;
    }
    getSpotId() {
        return this.spotId;
    }
}

export class SmallSpot extends ParkingSpot {
    constructor(spotId, lotId, level, occupy_start_time = '', occupy_end_time = '') {
        super(spotId, lotId, level, occupy_start_time, occupy_end_time);
        this.size = 'small';
    }
}

export class MediumSpot extends ParkingSpot {
    constructor(spotId, lotId, level, occupy_start_time = '', occupy_end_time = '') {
        super(spotId, lotId, level, occupy_start_time, occupy_end_time);
        this.size = 'medium';
    }
}

export class LargeSpot extends ParkingSpot {
    constructor(spotId, lotId, level, occupy_start_time = '', occupy_end_time = '') {
        super(spotId, lotId, level, occupy_start_time, occupy_end_time);
        this.size = 'large';
    }
}