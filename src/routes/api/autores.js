const { getAll, createAutor, getById } = require('../../controllers/autores.controller');
const { getPostsByAutor } = require('../../controllers/posts.controller');
const { checkAutorId } = require('../../middlewares/autor.middleware');

const router = require('express').Router();

router.get('/', getAll)
router.get('/:autorId', checkAutorId, getById )
router.get('/:autorId/posts', checkAutorId, getPostsByAutor )
router.post('/', createAutor)

module.exports = router;