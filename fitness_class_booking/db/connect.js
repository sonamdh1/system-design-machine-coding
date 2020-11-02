'use strict';

import mysql from 'mysql';
import config from '../config/index.js';

const db = mysql.createConnection(config.db[config.env]);

const dbConn = db.connect(err => {
    if(err) {
        throw err;
    }
    console.log('Connected to DB');
});

export default dbConn;