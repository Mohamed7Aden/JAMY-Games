const router = require('express').Router();
const { User, Game } = require('../models');
const withAuth = require('../utils/auth');


// GET all games for dashboard
router.get('/', async (req, res) => {
    try {
      const dbGameData = await Game.findAll({
        attributes: ['id', 'title', 'filename', 'description']
      });
  
      const games = dbGameData.map((game) =>
        game.get({ plain: true })
      );
  
      res.render('homepage', {
        games,
        loggedIn: req.session.loggedIn
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

  // GET one game
router.get('/game/:id', withAuth, async (req, res) => {
    try {
      const dbGameData = await Game.findByPk(req.params.id);
  
      const game = dbGameData.get({ plain: true });
  
      res.render('game', { game, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  