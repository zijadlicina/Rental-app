const express = require('express')
const router = express.Router()
const Private = require('../../controllers/Private')
const { protect } = require('../../middleware/auth')

router.route('/').get(protect, Private.getPrivateData)

module.exports = router