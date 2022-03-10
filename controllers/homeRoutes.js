const router = require('express').Router();
const axios = require(`axios`).default;

// Prevent non logged in users from viewing the homepage
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
    }).catch(function (error) {
      console.error(error);
    });

    res.render('homepage', {
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
