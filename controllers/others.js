/* GET home page */
const index = (req, res) => {
  res.render('index', { title: 'Home' });
};

/* GET about page */
const about = (req, res) => {
  res.render('about', { title: 'About' });
};

module.exports = {
  index,
  about
};
