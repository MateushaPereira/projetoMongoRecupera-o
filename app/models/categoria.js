var mongoose = require('mongoose');
require('mongoose-type-email');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        created: {
            type: Date,
            default: Date.now,
            required: false
        }
    });
    return mongoose.model('Categoria', schema);
}