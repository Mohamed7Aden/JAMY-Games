const { Router } = require('express');
const passport = require('passport')
const router = Router();

// post request that handles login using passport.authenticate function using the local strategy
router.post('/login', passport.authenticate('local'), (req, res) => {

    req.session.save(() => {
        req.session.user_id = userData.id;
        req.session.loggedIn = true;
        
        res.json({ user: userData, message: 'You are now logged in!' });
      });
})

module.exports = router;