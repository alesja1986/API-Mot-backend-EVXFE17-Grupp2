const route = require('express').Router()

const product = require('../../controllers/information/productSold')

route.post('/', product.createProduct);
route.get('/', product.getProducts);


module.exports = route;