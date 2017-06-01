var router = require('express').Router()

router.get('/', (req, res) => {
    res.send("<h1>This is a test router</h1>")
})


router.get('/hola', (req, res) => {
    res.send("<h2>Qué tal</h2>")
})

module.exports = router