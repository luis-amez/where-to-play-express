/* GET location list page */
const locationList = (req, res) => {
  const data = {
    title: 'Places to play',
    pageHeader: {
      title: 'Where to Play',
      strapline: 'Share your love for board games!'
    },
    sidebar: 'Do you want to play? Here you can find the most popular places in your city where the players meet.',
    locations: [{
      name: 'Juegamestore',
      address: 'C/ Falsa, 123, Cullera',
      rating: 5,
      facilities: ['Food', 'Store', 'Wifi'],
      distance: '500m'
    }, {
      name: 'Kaburi',
      address: 'C/ Truco, 13, Barcelona',
      rating: 4,
      facilities: ['Store', 'Bathroom'],
      distance: '100m'
    }]
  };

  res.render('locations-list', data);
};

/* GET location info page */
const locationInfo = (req, res) => {
  res.render('location-info', { title: 'Location Info' });
};

/* GET add review page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add Review' });
};

module.exports = {
  locationList,
  locationInfo,
  addReview
};
