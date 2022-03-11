const { Router } = require('express');
const passport = require('passport')
const router = Router();

// post request that handles login using passport.authenticate function using the local strategy
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.send(200);
})

module.exports = router;