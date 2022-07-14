require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
// routes
const firebaseRoute = require('./routes/firebaseRoute');
const usersRoute = require('./routes/usersRoute');
const booksRoute = require('./routes/booksRoute');

// port
const PORT: String = process.env.PORT;

// express server
const server = express();

// cors
server.use(express.json())
server.use(cors());

// API Routes
server.use('/users', usersRoute);
server.use('/firebase', firebaseRoute);
server.use('/books', booksRoute);


server.listen(PORT, () => console.log(`server is serving on port ${PORT}`));
