const { model } = require('mongoose');
const {HoldingsSchema} = require('../schemas/HoldingsSchemas')


// collection will be a "s" added to the model's name holding- [model] | holdings- [ collection ]
const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = {HoldingsModel};