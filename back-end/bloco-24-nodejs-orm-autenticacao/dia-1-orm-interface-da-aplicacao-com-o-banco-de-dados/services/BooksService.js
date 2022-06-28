const Book = require("../models/Book")

const getAll = async () => {
  const books = await Book.findAll();

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);
  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });
  return newBook;
};

const update = async (id, {title, author, pageQuantity}) => {
  const [updatedBook] = await Book.update(
    {title, author, pageQuantity},
    {where: {id}}
    );
  return updatedBook;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
}