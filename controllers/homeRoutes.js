const router = require('express').Router();
<<<<<<< HEAD
const axios = require(`axios`).default;

// Prevent non logged in users from viewing the homepage
=======
const { User } = require('../models');
const axios = require('axios').default;
const withAuth = require('../utils/auth');




>>>>>>> 2b9d83a4dae8e8e1e8903600a9ff535bc901c6ec
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
<<<<<<< HEAD
    }).catch(function (error) {
      console.error(error);
    });

    res.render('homepage', {
=======
      res.render('homepage', {
        games: response.data
      });
    }).catch(function (error) {
      console.error(error);
>>>>>>> 2b9d83a4dae8e8e1e8903600a9ff535bc901c6ec
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
