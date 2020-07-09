module.exports = function (app) {
    var controller = app.controllers.autor;

    app.post('/autores', controller.salvaAutor);
    app.get('/autores', controller.listaAutor);
    app.put('/autores', controller.alteraAutor);
    app.delete('/autores/:id', controller.removeAutor);
    app.get('/autores/:id', controller.obtemAutor);

};