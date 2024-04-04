const mongoose = require('mongoose');

// Customer schema in MONGO-DB
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    specialPrice: [{
        productName: String,
        price: Number
    }]
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
