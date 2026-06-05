const PostModel = require ('../models/posts.model');

const checkPostId = async (req, res, next) => {
    const { postId } = req.params;

    if (isNaN(postId)) {
        return res.status(400).json({ error: 'El post debe ser un número' });
    }

    const post = await PostModel.selectById(postId)

    if (!post) {
        return res.status(404).json({ error: 'No existe un post con ese ID' })
    }

    req.post = post;
    next();
}

module.exports = {
    checkPostId
}