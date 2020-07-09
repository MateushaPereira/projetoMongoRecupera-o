var mongoose = require('mongoose');
require('mongoose-type-email');
module.exports = function () {
    var schema = mongoose.Schema({
        nome: {
            type: String,
            required: true
        },
        valor: {
            type: Number,
            required: true
        },
        dataLancamento: {
            type: Date,
            required: true
        },
        categoria: {
            type: mongoose.Schema.ObjectId,
            ref: 'Categoria',
            required: true
        },
        autores: [{
            type: mongoose.Schema.ObjectId,
            ref: 'Autor',
            required: true
        }],
        created: {
            type: Date,
            default: Date.now,
            required: false
        },
        ativo: {
            type: Boolean,
            defaul: function(v){
                this.ativo = true
            },
            required:false
        }
    });
    return mongoose.model('Livros', schema);
}
