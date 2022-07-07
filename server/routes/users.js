import express from 'express';

import {
    getUserById,
    getUsers,
    createUser,
    deleteUserById,
    updateUserById,
} from '../controllers/users';

const router = express.Router();

// always start on the name of the file => '/' = /users
router.get('/', getUsers);
router.get('/', createUser);
router.get('/:id', getUserById);
router.get('/:id', deleteUserById);
router.get('/:id', updateUserById);

export default router;
