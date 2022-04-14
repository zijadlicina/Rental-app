// this route is for everything that dont have a resource or a model

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index')
})

module.exports = router