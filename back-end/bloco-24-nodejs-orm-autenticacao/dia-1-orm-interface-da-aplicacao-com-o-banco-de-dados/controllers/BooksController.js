const express = require('express');
const BookService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();

  res.status(200).json(books);
}

module.exports = {
  getAll,
}