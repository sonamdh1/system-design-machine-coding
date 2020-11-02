import { FitnessClass, Yoga, Gym, Dance } from './fitnessClass.js';
import constants from '../constants.js';

export class FitnessCenter {
    constructor({zip_code}) {
        this.zip_code = zip_code;
        this.fitness_classes = [];
    }
    getFitnessClasses() {
        return this.fitness_classes;
    }
    addFitnessClass(fitclass) {
        let new_class = null;
        switch(fitclass.type) {
            case constants.fitnessClassTypes.yoga:
                new_class = new Yoga(fitclass);
                break;
            case constants.fitnessClassTypes.gym:
                new_class = new Gym(fitclass);
                break;
            case constants.fitnessClassTypes.dance:
                new_class = new Dance(fitclass);
                break;
            default:
                new_class = new FitnessClass(fitclass);
        }
        this.fitness_classes.push(new_class);
        // console.log('fitness_classes - ', this.zip_code, this.fitness_classes, );
        return new_class;
    }
    bookClass(user, fitclass) {
        // console.log('before bookClass', user, fitclass);
        if(fitclass.capacity >= 1) {

            // check if booking does not already exist for user
            // check if user is in waiting list for class

            user.bookings.push(fitclass);
            fitclass.capacity--;
        }
        else {
            fitclass.waiting_list_queue.push(user);
        }
        // console.log('after bookClass', user, fitclass);
    }
    cancelClass(user, fitclass) {
        // console.log('before cancelClass', user, fitclass);
        user.bookings = user.bookings.filter(booking => {
            return booking.id !== fitclass.id;
        });

        // cancel for user in waiting list

        if(fitclass.capacity === 0) { 
            let lr_user = fitclass.waiting_list_queue.shift();
            lr_user.bookings.push(fitclass);
        }
        else {
            fitclass.capacity++;
        }
        // console.log('after cancelClass', user, fitclass);
    }
}
