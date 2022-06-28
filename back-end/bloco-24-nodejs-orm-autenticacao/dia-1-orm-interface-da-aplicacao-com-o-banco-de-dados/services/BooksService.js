const Book = require("../models/Book")

const getAll = async () => {
  const books = await Book.findAll();

  return books;
}

module.exports = {
  getAll,
}