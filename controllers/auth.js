const { Router } = require('express');
const passport = require('passport')
const router = Router();
const User = require('../models/User');
const local = require('../strategies/local');


// passport.use(User.createStrategy());
// passport.use(new LocalStrategy(

//   function(email, password, done) {
//   User.findOne({ email: email }, function (err, user) {
//     if (err) {return done(err); }

//     if(!user) {return done(null, false, { message: 'User not found.'})}
//     if (!user.verifyPassword(password)) {return done(null, false, {
//       message: 'Invalid password.'
//     });}
//   })
// }
// ));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// post request that handles login using passport.authenticate function using the local strategy
router.post('/login', passport.authenticate('local'), (req, res) => {

    // req.session.save(() => {
    //     req.session.user_id = userData.id;
    //     req.session.loggedIn = true;
        
    //     res.json({ user: userData, message: 'You are now logged in!' });
    //   });
})

module.exports = router;