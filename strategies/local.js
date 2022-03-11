const LocalStrategy = require('passport-local');
const passport = require('passport');
const { User } = require('../models');


// handles serialized user into a session(takes cookie and check to see which user it belongs to and take user and serialize it back into a session (this is how passport maintains a session)) 
passport.serializeUser((user, done) => {
    done(null, user.username);
});
// handles deserializing a user into a session
passport.deserializeUser(async(user, done) => {
    try {

    const result = await User.findOne({ where: { username: user.username } });
    // checking to see if result is truthy
    if (result) {
        done(null, result);
    }
    } catch (err) {
        done(err, null)
    }
});

// calling .use function and creating a new instance of LocalStrategy
passport.use(new LocalStrategy(
    // username and password from req.body, done function that is gonna be invoked after we're done checking username and password
    async(username, password, done) => {
       try {
            // search database for record that matches username that was sent from client
        const user = await User.findOne({ where: { username: username } });
       
        
        // result is going to be an array of arrays so check if it holds any values
        if (!user) {
            // null means no errors  and false means user was not found
            done(null, false)
        } else {
            // if user is found compare password to database
            if (await user.checkPassword(password)
        ) {
                // result is the actual user record and is passed in if the user entered the correct password
                done(null, user)
            } else {
                // if password is not the same
                done(null, false);
            }
        }
    } catch (err) {
        done(err, false);
    }
       }
));