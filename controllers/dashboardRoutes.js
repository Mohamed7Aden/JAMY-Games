const router = require('express').Router();
const { User, SavedGames, Game_details } = require('../models');
const withAuth = require('../utils/auth');


// GET all games for dashboard
router.get('/', withAuth, async (req, res) => {
  try {
      let games = {};
      const userGameData = await User.findByPk(req.session.user_id, {
        include: [{model: Game_details, through: SavedGames, as: 'my_games'}]
      });
      console.log(userGameData);
       games = userGameData.get({plain:true});
       console.log(games);
      res.render("dashboard", {
        userGames: games
      });
    } catch (err) {
      console.log(err);
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