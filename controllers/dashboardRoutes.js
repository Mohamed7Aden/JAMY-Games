const router = require('express').Router();
const { User, SavedGames, Game_details } = require('../models');
const withAuth = require('../utils/auth');
const axios = require("axios").default;


// GET all games for dashboard
router.get("/", async (req, res) => {
  try {
    const allGameData = {
      method: "GET",
      url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "1a3958a999msh626d8d771ef20b0p1e89b7jsn52537a78b46c",
      },
    };
  
    axios.request(allGameData).then(function (response) {
     
          res.render("dashboard", {
            games: response.data,
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
   catch (err) {
    res.status(500).json(err);
  }
});

  // GET one game
router.get('/game/:id', withAuth, async (req, res) => {
    try {
      const dbGameData = await SavedGames.findByPk(req.params.id);
  
      const game = dbGameData.get({ plain: true });
  
      res.render('game', { game, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  module.exports = router;