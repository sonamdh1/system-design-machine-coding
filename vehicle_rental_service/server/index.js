import express from 'express';
import path from 'path';
import config from '../config/index.js';
import routes from '../routes/app.js';

const app = express();
const port = config.port;

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./public/index.html'));
})

app.use('/api', routes);

app.listen(port, (err) => {
    if(err) {
        throw err;
    }
    console.log(`Server is running on port - ${port}`);
})