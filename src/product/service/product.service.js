const Product = require('../data/product.model');

// Product service class, have the methods for manage products data
class ProductService {
    async getProductsInStock() {
        try {
            return await Product.find({ stock: { $gt: 0 } });
        } catch (error) {
            console.log(error)
            throw new Error('Error to get products in stockt')
        }
    }
    
    async createProduct(ProductoData) {
        try {
            return await Product.create(ProductoData);
        } catch (error) {
            console.log(error)
            throw new Error('Error to create product')
        }
    }

}

module.exports = ProductService;
