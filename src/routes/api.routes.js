const router = require("express").Router();

router.use('/autores', require('./api/autores.routes'))
router.use('/posts', require('./api/posts.router'))

module.exports = router;