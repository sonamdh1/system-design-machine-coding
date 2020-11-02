import { createID } from '../helper_methods.js';
import constants from '../constants.js';

export class FitnessClass {
    constructor({name, description, capacity, start_time, end_time}) {
        this.id = createID(16);
        this.name = name;
        this.description = description;
        this.capacity = capacity;
        this.start_time = start_time;
        this.end_time = end_time;
        this.waiting_list_queue = [];
    }
    getFitnessClass() {
    }
}

export class Yoga extends FitnessClass {
    constructor({name, description, capacity, start_time, end_time}) {
        super({name, description, capacity, start_time, end_time});
        this.type = constants.fitnessClassTypes.yoga;
        this.description = ""
    }
}

export class Gym extends FitnessClass {
    constructor({name, description, capacity, start_time, end_time}) {
        super({name, description, capacity, start_time, end_time});
        this.type = constants.fitnessClassTypes.gym;
    }
}

export class Dance extends FitnessClass {
    constructor({name, description, capacity, start_time, end_time}) {
        super({name, description, capacity, start_time, end_time});
        this.type = constants.fitnessClassTypes.dance;
    }
}