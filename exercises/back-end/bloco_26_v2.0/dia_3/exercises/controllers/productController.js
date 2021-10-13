const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/produtos', async (req, res, next) => {
  const products = await ProductModel.getAll();

  res.json(products);
});

router.get('/produtos/:id', async (req, res, next) => {
  const product = await ProductModel.getById(req.params.id);

  res.json(product);
});

router.post('/user', async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.json(newProduct);
});

router.delete('/user/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  res.json(products);
});

router.put('/user/:id', async (req, res) => {
  const { name, brand } = req.body;

  const products = await ProductModel.update(req.params.id, name, brand);

  res.json(products);
});

module.exports = router;
