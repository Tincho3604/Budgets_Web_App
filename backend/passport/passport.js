const passport = require('passport');
const LocalStategy = require('passport-local').Strategy

passport.use('local.sgiup', new LocalStategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
} , async (req, username, password, done) => {
        console.log(req.body)
    }
))

module.exports = passport;