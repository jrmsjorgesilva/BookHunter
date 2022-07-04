require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PORT = 8000;

const app = express();

const apiKey = process.env.API_KEY_NEW_YORK_TIMES;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json(apiKey);
})

app.listen(PORT, () => console.log(`server is serving on port ${PORT}`));