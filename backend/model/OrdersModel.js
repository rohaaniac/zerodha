const { model } = require('mongoose');
const {OrdersSchema} = require('../schemas/OrdersSchemas')


// collection will be a "s" added to the model's name holding- [model] | holdings- [ collection ]
const OrdersModel = new model("order", OrdersSchema);

module.exports = {OrdersModel};