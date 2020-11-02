import { Users } from './users.js';
import { FitnessCenter } from './fitnessCenter.js';

class FitnessTrainingPlatform {
    constructor() {
        this.users = [];
        this.fitness_centers = {};
    }
    addUser(name) {
        let user = new Users(name);
        this.users.push(user);
        console.log('Users - ', this.users);
        return user;
    }
    addFitnessClass(fitcenter, fitclass) {
        let center;
        if(this.fitness_centers[fitcenter.zip_code]) {
            center = this.fitness_centers[fitcenter.zip_code];
        } else {
            center = new FitnessCenter(fitcenter);
            this.fitness_centers[fitcenter.zip_code] = center;
        }
        // console.log('Fitness Centers -', this.fitness_centers);
        return center.addFitnessClass(fitclass);
    }
    getUsers() {
        return this.users;
    }
    getFitnessClasses(fitcenter) {
        fitcenter = this.fitness_centers[fitcenter.zip_code];
        if(fitcenter) {
            return fitcenter.getFitnessClasses();
        }
        return [];
    }
    bookClass(userId, centerCode, classId) {
        let center = this.fitness_centers[centerCode];
        if(!center) {
            return null;
        }
        let user = this.users.filter(u => {
            return u.id === userId;
        });
        user = user.length === 1 ? user[0] : null;
        let fitclass = center.fitness_classes.filter(cl => {
            return cl.id === classId;
        })
        fitclass = fitclass.length === 1 ? fitclass[0] : null
        if(user && fitclass) {
            return center.bookClass(user, fitclass);
        }
        // console.log('controller', this.users);
    }
    cancelClass(userId, centerCode, classId) {
        let center = this.fitness_centers[centerCode];
        if(!center) {
            return null;
        }
        let user = this.users.filter(u => {
            return u.id === userId;
        });
        user = user.length === 1 ? user[0] : null;
        let fitclass = center.fitness_classes.filter(cl => {
            return cl.id === classId;
        })
        fitclass = fitclass.length === 1 ? fitclass[0] : null
        if(user && fitclass) {
            return center.cancelClass(user, fitclass);
        }
        // console.log('controller', this.users);
    }
}

export default new FitnessTrainingPlatform();