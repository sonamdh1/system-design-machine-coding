import { createID } from '../helper_methods.js';

export class Users {
    constructor(name) {
        this.id = createID(16);
        this.name = name;
        this.class_attended = 0;
        this.bookings = [];
    }
    getUserName() {
        return this.name;
    }
    getUserBookings() {
        return this.bookings;
    }
    setUserName(name) {
        this.name = name;
    }
}