/* GET location list page */
const locationList = (req, res) => {
  res.render('locations-list', { title: 'Locations List' });
};

/* GET location info page */
const locationInfo = (req, res) => {
  res.render('index', { title: 'Location Info' });
};

/* GET add review page */
const addReview = (req, res) => {
  res.render('index', { title: 'Add Review' });
};

module.exports = {
  locationList,
  locationInfo,
  addReview
};
