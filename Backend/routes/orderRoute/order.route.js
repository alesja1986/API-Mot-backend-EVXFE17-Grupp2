const route = require('express').Router();

const orders = require('../../controllers/order/order.controller.js');

route.get('/', orders.getOrders);
route.post('/', orders.createOrder);
route.put('/:_id', orders.updateOrder);
route.delete('/:_id', orders.deleteOrder);

module.exports = route;