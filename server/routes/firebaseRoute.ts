const firebaseRouter = require('express').Router();

require('dotenv').config();

firebaseRouter.get('/', (req: any, res: any): any => {
    // const apiKeyProtected = process.env.API_KEY_NEW_YORK_TIMES;

    const databaseProtectedInfo = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
    };

    res.json(databaseProtectedInfo);
});

module.exports = firebaseRouter;
