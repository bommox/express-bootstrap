var router = require('express').Router()

router.get('/', (req, res) => {
    res.send("HELLO WORLD")
})


router.get('/bye', (req, res) => {
    res.send("BYE BYE")
})

module.exports = router