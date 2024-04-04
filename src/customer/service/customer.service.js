const Customer = require('../data/customer.model');
const ProductService = require('../../product/service/product.service');

// Customer service class, have the methods for manage customers data
class CustomerService {
    constructor() {
        this.productService = new ProductService();
    }

    async createCustomer(customerData) {
        try {
            return await Customer.create(customerData);
        } catch (error) {
            console.log(error)
            throw new Error('Error to create customer');
        }
    }

    async getSpecialPrice(userId, productName) {
        try {
            const customer = await Customer.findById(userId);
            if (!customer) {
                throw new Error('Customer not found');
            }
            const products = await this.productService.getProductsInStock();
            const specialPrice = customer.specialPrice.find(item => item.productName === productName);
            const verifyPrice = products.find(item => item.name === productName)

            if(verifyPrice.stock > 0){
                return specialPrice ? 
                    {
                        message: `The customer have special price for the ${productName} brand`,
                        special_price: specialPrice.price
                    } 
                    : 
                    {
                        message: `The customer have not a special price for the ${productName} brand`,
                        base_price: verifyPrice.price
                    };
            }else{
                return {
                    message: `the ${productName} brand does not stock`
                }
            }

        } catch (error) {
            console.log(error)
            throw new Error('Error getting special price');
        }
    }
}

module.exports = CustomerService;