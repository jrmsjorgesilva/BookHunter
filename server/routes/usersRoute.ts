const usersRouter = require('express').Router();
const UsersModel = require('../models/usersModel');

usersRouter.get('/', async (req: any, res: any) => {
    res.json(UsersModel);
});

module.exports = usersRouter;
