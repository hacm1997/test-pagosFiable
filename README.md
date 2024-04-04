# Sneakers Store

### Products

Create product:
POST: /product
##### body: 
        name: string,
        description: string,
        price: number,
        stock: number

Get products:
GET: /product

### Customers
Create customer:
POST: /customer
##### body: 
        name: string,
        email: string,
        specialPrice: [
            {
                productName: string,
                price: number
            }
        ]

Get price or base price:
GET: /price/:user_id/:producName
