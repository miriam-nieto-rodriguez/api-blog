const { getAll } = require('../../controllers/autores.controller');

const router = require('express').Router();

router.get('/', getAll)

module.exports = router;