const AutorModel = require('../models/autores.model')

const checkAutorId = async (req, res, next) => {
    const { autorId } = req.params;

    if (isNaN(autorId)) {
        return res.status(400).json({
            error: 'El autor debe ser un número'
        });
    }

    const autor = await AutorModel.selectById(autorId)
    if (!autor) {
        return res.status(404).json({
            error: 'No existe el autor con ese ID'
        });
    }

    req.autor = autor;
    
    next();
}


module.exports = {
    checkAutorId
}