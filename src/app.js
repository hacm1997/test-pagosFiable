const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('dotenv').config();
require('./Shared/Database/mongodb');

const productRoutes = require('./product/rest/product.controller');
const customerRoutes = require('./customer/rest/customer.controller');

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use('/', productRoutes);
app.use('/', customerRoutes);

const PORT = process.env.NODE_PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
