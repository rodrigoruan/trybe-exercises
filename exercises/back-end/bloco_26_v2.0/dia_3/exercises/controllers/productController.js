const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/produtos', async (req, res, next) => {
  const products = await ProductModel.getAll();

  if (!products) res.status(404).json({ message: 'Products not found' });

  res.status(200).json(products);
});

router.get('/produtos/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) res.status(404).json({ message: 'Product not found' });

  res.status(200).json(product);
});

router.post('/produtos', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  if (!newProduct) res.status(400).json({ message: 'Product not registered' });

  res.status(201).json(newProduct);
});

router.delete('/produtos/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (!products) res.status(400).json({ message: 'Product not deleted' });

  res.status(204).json(products);
});

router.put('/produtos/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  if (!products) res.status(404).json({ message: 'Product not found' });

  res.status(200).json(products);
});

module.exports = router;
