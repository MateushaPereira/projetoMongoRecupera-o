module.exports = function (app) {
    var controller = app.controllers.categoria;

    app.post('/categorias', controller.salvaCategoria);
    app.get('/categorias', controller.listaCategoria);
    app.put('/categorias', controller.alteraCategoria);
    app.delete('/categorias/:id', controller.removeCategoria);
    app.get('/categorias/:id', controller.obtemCategoria);

};