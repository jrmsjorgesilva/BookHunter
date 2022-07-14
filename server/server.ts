require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
// routes
const firebaseRoute = require('./routes/firebaseRoute');

// port
const PORT: String = process.env.PORT;

// express server
const server = express();

// cors
server.use(express.json())
server.use(cors());

// API Routes
server.use('/firebase', firebaseRoute)
server.get('/', (req: any, res: any): any => {
    res.json(process.env.API_KEY_NEW_YORK_TIMES);
});


server.listen(PORT, () => console.log(`server is serving on port ${PORT}`));
