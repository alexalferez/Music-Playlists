const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Playlist = require('../models/playlist');
//Require your User Model here!

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    Playlist.findOne({'googleId': profile.id }, function(err, user) {
        if (err) return cb(err);
        if (user) {
            if (!user.avatar){
                user.avatar = profilr.photos[0].value;
                user.save(function(err) {
                    return cb(null, user);
                });
            } else {
                return cb(null, user);
            }
        } else {
            const newUser = new Playlist({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });
            newUser.save(function(err) {
                if (err) return cb(err);
                return cb(null, newUser);
            });
        }
    });

  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {

  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
    Playlist.findById(id, function(id, one){
        done(err, user);
    });
});

