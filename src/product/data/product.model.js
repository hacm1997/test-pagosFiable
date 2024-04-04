const mongoose = require('mongoose');

// Prodcut schema in MONGO-DB
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    stock: {
        type: Number,
        default: 0
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;