var GoogleStrategy = require("passport-google-oauth20").Strategy;
const UserModel = require("../models/userModel.js");
module.exports = (passport) => {
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  passport.deserializeUser(function (id, done) {
    UserModel.findById(id, function (err, user) {
      done(err, user);
    });
  });
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.SERVER_URL_DEV + "/auth/google/callback",
      },
      function (accessToken, refreshToken, profile, cb) {
        UserModel.findOne({ googleId: profile.id }, async function (err, user) {
          if (user) {
            const updatedUser = {
              fullName: profile.displayName,
              email: profile.emails[0].value,
              pic: profile.photos[0].value,
              secret: accessToken,
            };
            await UserModel.findOneAndUpdate(
              { _id: user.id },
              { $set: updatedUser },
              { new: true }
            ).then((result) => {
              return cb(err, result);
            });
          } else {
            const newUser = new UserModel({
              googleId: profile.id,
              username: "",
              number: "0",
              address: "Nothing",
              fullName: profile.displayName,
              email: profile.emails[0].value,
              pic: profile.photos[0].value,
              secret: accessToken,
            });
            newUser.save().then((result) => {
              return cb(err, result);
            });
          }
        });
      }
    )
  );
};
