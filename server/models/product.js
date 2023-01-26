var mongoose = require('mongoose');
const user = require('./user');
var Schema = mongoose.Schema

var productSchema = new Schema({
    productName:{type: String, required: true},
    price:{type: Number, required: true},
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});


module.exports = mongoose.model('Product', productSchema)