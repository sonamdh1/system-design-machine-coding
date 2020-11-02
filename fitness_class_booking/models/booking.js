import { createID } from '../helper_methods';

export default class Booking {
    constructor(userId, classId, status) {
        this.id = createID(16);
        this.userId = userId;
        this.classId = classId;
        this.status = status;
    }
    getBookingStatus() {
        return this.status;
    }
}