const booksRouter = require('express').Router();
// controllers
const createBook  = require('../controllers/createBookController');
const getBook = require('../controllers/getBookController');
const getBookById = require('../controllers/getBookByIdController');
const updateBookById = require('../controllers/updateBookByIdController');
const deleteBookById = require('../controllers/deleteBookByIdController')

booksRouter.post('/', createBook);

booksRouter.get('/', getBook);

booksRouter.get('/:id', getBookById);

booksRouter.patch(':id', updateBookById);

booksRouter.delete('/:id', deleteBookById);

module.exports = booksRouter;