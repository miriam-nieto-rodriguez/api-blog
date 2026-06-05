const { getById, createPost } = require('../../controllers/posts.controller');
const { getAll } = require('../../controllers/posts.controller');
const { checkPostId } = require('../../middlewares/posts.middleware');

const router = require('express').Router();

router.get('/', getAll)
router.get('/:postId', checkPostId, getById)
router.post('/', createPost)


module.exports = router;