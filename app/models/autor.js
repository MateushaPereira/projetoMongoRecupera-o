var mongoose = require('mongoose');
require('mongoose-type-email');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        email: {
            type: mongoose.SchemaTypes.Email,
            required: true,
            index: {
                unique: true
            }
        },
        dataNascimento: {
            type: Date,
            required: true
        },
        nacionalidade: {
            type: String,
            required: true
        },
        created: {
            type: Date,
            default: Date.now,
            required: false
        }
    });
    return mongoose.model('Autor', schema);
}
