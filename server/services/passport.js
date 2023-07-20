const passport = require('passport');
const User = require('../models/user.model');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

// ** setting local strategy:
const localOptions = { usernameField: 'walletAddress' };
const localLogin = new LocalStrategy(localOptions, function (walletAddress, password, done) {
  User.findOne({ walletAddress: walletAddress }, function (err, user) {
    if (err) {
      return done(err);
    }

    if (!user) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  });
});

// ** setting the jwt strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.TOKEN_SECRET,
};

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.sub)
    .then(user => {
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    })
    .catch(err => done(err, false));
});

// ** tell passport to use defined strategies:
passport.use(jwtLogin);
passport.use(localLogin);
