const express = require('express')
const router = express.Router()

const BikeController = require('../../controllers/BikeController')

// @route - /api/bikes
// @desc Get all bikes
// @acces Public
router.route('/').get(BikeController.getAllBikes)

// @route POST api/bikes/add
// @desc Create one bike
// @acces Public
router.route('/add').get(BikeController.createOneBike)

// @route GET/DELETE api/bikes/:id
// @desc Get one bike, Delete one bike
// @acces Public
router.route('/:id').get(BikeController.getOneBike).put(BikeController.updateOneBike).delete(BikeController.removeOneBike)

module.exports = router;