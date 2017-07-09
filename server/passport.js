const LocalStrategy = require('passport-local').Strategy,
    User = require('./db/user');

module.exports = function (passport) {

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
        },
        function (email, password, done) {
            if (email) email = email.toLowerCase();

            process.nextTick(() => {
                User.findOne(email, password, (err, user) => {
                    if (err) {
                        return done(err);
                    }
                    if (!user) {
                        return done(null, false, {message: 'Incorrect username.'});
                    }
                    if (user.password !== password) {
                        return done(null, false, {message: 'Incorrect password.'});
                    }
                    return done(null, user);
                });
            });
        }
    ));
};