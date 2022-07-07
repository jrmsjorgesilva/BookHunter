require('dotenv').config();
// import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// import express from 'express';
// import axios from 'axios';
// import cors from 'cors';
const express = require('express');
const axios = require('axios');
const cors = require('cors');
// import usersRoutes from './routes/users.js';

// port 
const PORT = 8000;

// dotenv for import
// dotenv.config()

// express server 
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

// cors 
app.use(cors());

// routes for users 
// app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  res.json(apiKeyProtected);
});

app.get('/database', (req, res) => {
  res.json(databaseProtectedInfo);
});

app.listen(PORT, () => console.log(`server is serving on port ${PORT}`));
