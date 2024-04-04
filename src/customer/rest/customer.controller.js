const express = require('express');
const router = express.Router();
const CustomerService = require('../service/customer.service');

const customerService = new CustomerService();
// Customer endpoints for get price or special price
router.get('/price/:user_id/:product_name', async (req, res) => {
    const { user_id, product_name } = req.params;
    try {
        const specialPrice = await customerService.getSpecialPrice(user_id, product_name);
        res.json(specialPrice);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// For create customers
router.post('/customer', async (req, res) => {
    const { name, email, specialPrice } = req.body;
    try {
        const newCustomer = await customerService.createCustomer({ name, email, specialPrice });
        res.json(newCustomer);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;