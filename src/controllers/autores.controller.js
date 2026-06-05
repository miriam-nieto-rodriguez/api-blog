const AutorModel = require('../models/autores.model')

const getAll = async (req, res) => {
    try {
        const autores = await AutorModel.selectAll()

        res.json(autores)

    }catch (error){
       res.status(500).json({ error: error.message });
    }
}

module.exports = { getAll }
