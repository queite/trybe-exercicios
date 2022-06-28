const express = require('express');
const BookService = require('../services/BooksService');

const getAll = async (_req, res) => {
  const books = await BookService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const {id} = req.params;
  const book = await BookService.getById(id);

  if (!book) return res.status(404).json({ "message": "Book not found" });
  res.status(200).json(book);
};

const create = async (req,res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BookService.create({ title, author, pageQuantity });
  res.status(201).json(newBook);
}

module.exports = {
  getAll,
  getById,
  create,
}