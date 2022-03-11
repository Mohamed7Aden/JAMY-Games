const router = require('express').Router();
const { User } = require('../models');
const axios = require('axios').default;
const withAuth = require('../utils/auth');




router.get('/', async (req, res) => {
  try {
    const allGameData = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '1a3958a999msh626d8d771ef20b0p1e89b7jsn52537a78b46c'
      }
    };
    axios.request(allGameData).then(function (response) {
      console.log(response.data);
      res.render('homepage', {
        games: response.data
      });
    }).catch(function (error) {
      console.error(error);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/game/:id', async (req, res) => {
  try {
    let oneGameDetails = {
      method: 'GET',
      url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
      params: {id: `452`},
      headers: {
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
        'x-rapidapi-key': '1a3958a999msh626d8d771ef20b0p1e89b7jsn52537a78b46c'
      }
    };
    axios.request(oneGameDetails).then(function (response) {
      console.log(response.data);
      res.render('details', {
        gameDetails: response.data
      });
    }).catch(function (error) {
      console.error(error);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


module.exports = router;
