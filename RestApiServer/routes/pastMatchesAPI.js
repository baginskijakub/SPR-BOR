var express = require('express')
var router = express.Router()




router.get('/', async (req, res, next) => {
    await res.json(pastMatchesData)
})

module.exports = router