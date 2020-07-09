module.exports = function (app) {
    var controller = app.controllers.livros;

    app.post('/livros', controller.salvaLivro);
    app.get('/livros', controller.listaLivro);
    app.put('/livros', controller.alteraLivro);
    app.delete('/livros/:id', controller.removeLivro);
    app.get('/livros/:id', controller.obtemLivro);

};