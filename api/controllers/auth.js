// auth.js
var passport = require("passport");
var JwtStrategy = require('passport-jwt').Strategy,
  ExtractJwt = require('passport-jwt').ExtractJwt;
var cfg = require("../config/config.js");
const Person = require("../models/Person.js");
var params = {
  secretOrKey: cfg.jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt')
};

module.exports = function () {
  var strategy = new JwtStrategy(params, function (payload, done) {
    var user = Person.findAll()[payload.id] || null;

    if (user) {
      return done(null, { id: user.id });
    } else {
      return done(new Error("User not found"), null);
    }
  });
  passport.use(strategy);
  return {
    initialize: function () {
      return passport.initialize();
    },
    authenticate: function () {
      return passport.authenticate("jwt", cfg.jwtSession);
    }
  };
}