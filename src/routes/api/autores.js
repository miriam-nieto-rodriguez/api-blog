const { getAll, createAutor, getById } = require('../../controllers/autores.controller');
const { checkAutorId } = require('../../middlewares/autor.middleware');

const router = require('express').Router();

router.get('/', getAll)
router.get('/:autorId', checkAutorId ,getById )
router.post('/', createAutor)

module.exports = router;