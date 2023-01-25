var mongoose = require('mongoose')
var Schema = mongoose.Schema

var userSchema = new Schema({
    username:{type: String},

    pwd:{type: String}
});
module.exports = mongoose.model('User', userSchema)