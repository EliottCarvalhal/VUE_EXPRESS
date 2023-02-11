var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    username:{type: String, required: true},
    pwd:{type: String, required: true},
    wallet:{type: Number}
});
module.exports = mongoose.model('User', userSchema)