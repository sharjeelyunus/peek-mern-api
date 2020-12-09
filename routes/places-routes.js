const express = require('express');

const placesControllers = require('../controllers/places-controller');

const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlaceByUserId);

router.post('/', placesControllers.createPlace);

module.exports = router;