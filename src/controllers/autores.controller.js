const AutorModel = require('../models/autores.model')

const getAll = async (req, res) => {
    try {
        const autores = await AutorModel.selectAll()

        res.json(autores)

    } catch (error) {
        res.status(500).json({
            message: 'Error al consultar la BBDD '
        });
    }
}

const getById = (req, res) => {
    res.json (req.autor)
}

const createAutor = async (req, res) => {
    try {
        const result = await AutorModel.insertAutor(req.body)

        const nuevoAutor = await AutorModel.selectById(result.insertId);

        if (!nuevoAutor) {
            return res.status(404).json({
                message: 'no existe el autor con ese ID'
            })
        }
        res.status(201).json(nuevoAutor)

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

}


module.exports = {
    getAll,
    getById,
    createAutor
}