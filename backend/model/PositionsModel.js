const { model } = require('mongoose');
const {PositionsSchema} = require('../schemas/PositionsSchema')


// collection will be a "s" added to the model's name holding- [model] | holdings- [ collection ]
const PositionsModel = new model("position", PositionsSchema);

module.exports = {PositionsModel};