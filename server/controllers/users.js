import express from 'express';
import { uuid } from 'uuidv4';

let users = [
    {
        name: 'Lindomar brasileiro',
        Company: 'Sub Zero',
        id: uuid(),
    },
    {
        name: 'Francisco Moreira',
        Company: 'Salles LTDA',
        id: uuid(),
    },
    {
        name: 'Marilda Giranda Claro',
        Company: 'Siemens',
        id: uuid(),
    },
];

export const getUsers = (req, res) => {
    console.log('get users', req, res);
}

export const createUser = (req, res) => {
    console.log('create users', req, res);
}

export const getUserById = (req, res) => {
    console.log('get users by specific id', req, res);
}

export const deleteUserById = (req, res) => {
    console.log('delete users by id', req, res);
}

export const updateUserById = (req, res) => {
    console.log('update users', req, res);
}
