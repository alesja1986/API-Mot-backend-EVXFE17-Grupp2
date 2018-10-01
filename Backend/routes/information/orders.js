const route = require('express').Router()

const orders = require('../../controllers/information/orders.js')

route.post('/', orders.createOrders);
route.get('/', orders.getOrders);


module.exports = route;