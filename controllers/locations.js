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
  const data = {
    title: 'Juegamestore',
    pageHeader: {
      title: 'Juegamestore'
    },
    sidebar: {
      context: 'is on Where to Play because you can meet here people interested in playing board games. Now it\'s your turn.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Juegamestore',
      address: 'C/ Falsa, 123, Cullera',
      rating: 5,
      facilities: ['Food', 'Store', 'Wifi'],
      coords: {
        lat: 39.164499,
        lng: -0.252616
      },
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '15:00pm',
        closing: '20:00pm',
        closed: false
      }, {
        days: 'Saturday',
        opening: '10:00am',
        closing: '23:30pm',
        closed: false
      }, {
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Charlie',
        rating: 5,
        timestamp: '3 August 2017',
        reviewText: 'Best place on earth. By far.'
      }, {
        author: 'Quintin',
        rating: 3,
        timestamp: '12 September 2017',
        reviewText: 'It was okay. Not many games.'
      }]
    }
  };

  res.render('location-info', data);
};

/* GET add review page */
const addReview = (req, res) => {
  const data = {
    title: 'Review Juegamestore on Where to Play',
    pageHeader: {
      title: 'Review Juegamestore'
    }
  };

  res.render('location-review-form', data);
};

module.exports = {
  locationList,
  locationInfo,
  addReview
};
