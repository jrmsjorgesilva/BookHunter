const firebaseRouter = require('express').Router();

require('dotenv').config();

firebaseRouter.get('/', (req: any, res: any): any => {
    // const apiKeyProtected = process.env.API_KEY_NEW_YORK_TIMES;

    const databaseProtectedInfo = {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
    };

    res.json(databaseProtectedInfo);
});

module.exports = firebaseRouter;
