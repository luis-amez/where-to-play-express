const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Other pages */
router.get('/', ctrlOthers.index);
router.get('/about', ctrlOthers.about);

/* Location pages */
router.get('/locations', ctrlLocations.locationList);
router.get('/locations/:id', ctrlLocations.locationInfo);
router.get('/locations/review/new', ctrlLocations.addReview);

module.exports = router;
