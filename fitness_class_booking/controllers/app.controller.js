// import mysqlConn from '../db/connect.js'
import FitnessTrainingPlatform from '../models/fitnessTrainingPlatform.js';

export default {
    createUsers: (req, res) => {
        const users = ['Sonam', 'Sanya', 'Umang'];

        res.json(
            users.map(user => {
                return FitnessTrainingPlatform.addUser(user);
            })
        )
    },
    createFitnessClasses: (req, res) => {
        const fitnessCenter = {
            zip_code: '110085'
        };
        const fitnessClasses = [
            {
                name: 'Dance Fitness',
                description: '',
                capacity: 2,
                start_time: 1900,
                end_time: 2000,
                type: 'Dance'
            },
            {
                name: 'HIIT',
                description: '',
                capacity: 20,
                start_time: 1700,
                end_time: 1730,
                type: 'Gym'
            },
            {
                name: 'S n C',
                description: '',
                capacity: 15,
                start_time: 1800,
                end_time: 1840,
                type: 'Gym'
            }
        ]
        res.json(
            fitnessClasses.map(fitnessClass => {
                return FitnessTrainingPlatform.addFitnessClass(fitnessCenter, fitnessClass);
            })
        )
    },
    getUsers: (req, res) => {
        res.json(FitnessTrainingPlatform.getUsers());
    },
    getFitnessClasses: (req, res) => {
        const fitnessCenter = {
            zip_code: '110085'
        };
        res.json(FitnessTrainingPlatform.getFitnessClasses(fitnessCenter));
    },
    bookClass: (req, res) => {
        const centerCode = '110085';
        let userId = req.query.userId,
            classId = req.query.classId;
        res.json(FitnessTrainingPlatform.bookClass(userId, centerCode, classId));
    },
    cancelClass: (req, res) => {
        const centerCode = '110085';
        let userId = req.query.userId,
            classId = req.query.classId;
        res.json(FitnessTrainingPlatform.cancelClass(userId, centerCode, classId));
    }
}
