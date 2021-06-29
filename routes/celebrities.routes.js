const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.model');

router.get('/create', (req, res) => {

  res.render('celebrities/new-celebrity');

});

router.post('/create', (req, res) => {

  const { name, occupation, catchphrase } = req.body;

	Celebrity.create({ name, occupation, catchphrase })
		.then((newCelebrity) => {
			console.log(newCelebrity);
			res.redirect('/celebrities');
		})
		.catch((err) => console.log(err));

  });

router.get('/', (req, res) => {
	
  Celebrity.find()
		.then((allCelebrities) => {
			console.log(allCelebrities);
			res.render('celebrities/celebrities', { allCelebrities });
		})
		.catch((err) => console.log(err));

  });

module.exports = router;
