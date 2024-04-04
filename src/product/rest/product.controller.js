const express = require('express');
const router = express.Router();
const ProductService = require('../service/product.service');

const productService = new ProductService();
// Product endpoints
router.get('/product', async (req, res) => {
    try {
        const productsInStock = await productService.getProductsInStock();
        res.json(productsInStock);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
// For create products
router.post('/product', async (req, res) => {
    const { name, description, price, stock } = req.body;
    try {
        const newProducto = await productService.createProduct({ name, description, price, stock });
        res.json(newProducto);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
