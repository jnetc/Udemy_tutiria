const { Router } = require('express');
const { geocode, forecast } = require('../utils/geocode');

const router = Router();

router.get('/', (req, res) => {
  res.render('index.ejs', {
    title: 'Weather app',
    name: 'Weather app',
    path: req.url,
  });
});

router.get('/about', (req, res) => {
  res.render('about.ejs', {
    title: 'About',
    name: 'About',
    path: req.url,
  });
});

router.get('/help', (req, res) => {
  res.render('help.ejs', {
    title: 'Help',
    name: 'Help',
    path: req.url,
  });
});

router.get('/weather', (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.send({
      error: 'You must provide an address',
    });
  }
  geocode(address, (err, { latitude, longitude, location } = {}) => {
    if (err) return res.send({ err });

    forecast(latitude, longitude, (err, forecast) => {
      if (err) return res.send({ err });

      res.send({
        forecast,
        location,
        address,
      });
    });
  });
});

router.use((req, res) => {
  res.status(404).render('404.ejs', {
    title: 'Page not found',
    errorNum: '404',
    errorMsg: 'Page not found',
  });
});

module.exports = router;
