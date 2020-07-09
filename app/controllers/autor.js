
module.exports = function (app) {
    var controller = {};
    var autor = app.models.autor;


    controller.salvaAutor = function (req, res) {
        autor.create(req.body).then(
            function (autor) {
                res.status(201).json(autor)
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaAutor = function (req, res) {
        autor.find().exec().then(
            function (autor) {
                res.status(200).json(autor);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraAutor = function (req, res) {
        var _id = req.body._id;
        autor.findByIdAndUpdate(_id, req.body).exec().then(
            function (autor) {
                res.status(200).json(autor);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.removeAutor = function (req, res) {
        var _id = req.params.id;
        autor.remove({"_id": _id}).exec().then(
            function (autor) {
                res.status(204).end();
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.obtemAutor = function (req, res) {
        var _id = req.params.id;
        autor.findById(_id).exec().then(
            function (autor) {
                if (!autor) {
                    res.status(404).end();
                } else {
                    res.status(200).json(autor);
                }
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    return controller;
}
