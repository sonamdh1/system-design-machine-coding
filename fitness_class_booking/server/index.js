"use strict";

import express from 'express';
// import bodyParser from 'body-parser';
import config from '../config/index.js';
import routes from '../routes/app.routes.js';
import path from 'path';

const port = config.port;

const app = express();

app.get('/', function(req, res){
    res.sendFile(path.resolve('client/index.html'));
});

app.use('/api', routes);

app.listen(port, (err) => {
    if(err) {
        throw err;
    }
    console.log(`Server is listening on port: ${port}`);
})
