const PostModel = require('../models/posts.model');

const getAll = async (req, res) => {
    try {

        const posts = await PostModel.selectAll()
        res.json(posts)

    } catch (error) {
        res.status(500).json({
            message: 'Error al consultar la BBDD'
        })
    }
}

const getById = (req, res) => {
    res.json(req.post)
}

const getPostsByAutor = async (req, res) => {
    try {
        const {
            autorId
        } = req.params;

        const posts = await PostModel.selectByAutorId(autorId)

        res.json(posts)

    } catch (error) {
        res.status(500).json({
            message: 'Error al recuperar los posts del autor',
            error: error.message
        });
    }
}

const createPost = async (req, res) => {
    try {
        const result = await PostModel.insertPost(req.body)

        const nuevoPost = await PostModel.selectById(result.insertId)

        if (!nuevoPost) {
            return res.status(404).json({
                message: ' no existe un post con ese ID'
            })
        }

        res.status(201).json(nuevoPost)

    } catch (error) {
        res.status(500).json({
            message: 'Error al insertar el post en la BBDD',
            error: error.message
        });

    }
}

module.exports = {
    getAll,
    getById,
    getPostsByAutor,
    createPost
}