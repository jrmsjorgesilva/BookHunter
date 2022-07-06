require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const PORT = 8000;

const app = express();

const apiKeyProtected = process.env.API_KEY_NEW_YORK_TIMES;

const databaseProtectedInfo = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json(apiKeyProtected);
});

app.get('/database', (req, res) => {
  res.json(databaseProtectedInfo);
});

app.listen(PORT, () => console.log(`server is serving on port ${PORT}`));
