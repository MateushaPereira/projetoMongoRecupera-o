
module.exports = function (app) {
    var controller = {};
    var livros = app.models.livros;


    controller.salvaLivro = function (req, res) {
        livros.create(req.body).then(
            function (livros) {
                res.status(201).json(livros)
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.listaLivro = function (req, res) {
        livros.find().populate('autores').populate('categoria').exec().then(
            function (livros) {
                res.status(200).json(livros);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    };

    controller.alteraLivro = function (req, res) {
        var _id = req.body._id;
        livros.findByIdAndUpdate(_id, req.body).exec().then(
            function (livros) {
                res.status(200).json(livros);
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.removeLivro = function (req, res) {
        var _id = req.params.id;
        livros.remove({"_id": _id}).exec().then(
            function (livros) {
                res.status(204).end();
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    controller.obtemLivro = function (req, res) {
        var _id = req.params.id;
        livros.findById(_id).exec().then(
            function (livros) {
                if (!livros) {
                    res.status(404).end();
                } else {
                    res.status(200).json(livros);
                }
            }, function (erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );
    }

    return controller;
}
