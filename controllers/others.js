/* GET home page */
const index = (req, res) => {
  res.render('index', { title: 'Home' });
};

/* GET about page */
const about = (req, res) => {
  const data = {
    title: 'About Where to Play',
    content: 'Where to Play helps you to find the best places to enjoy your favourite hobby: Playing board games!\nLorem ipsum dolor sit amet, consectetur adipiscing elit.'
  };

  res.render('about', data);
};

module.exports = {
  index,
  about
};
