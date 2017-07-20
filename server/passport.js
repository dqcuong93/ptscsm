const LocalStrategy = require('passport-local').Strategy,
    User = require('./db/account');

module.exports = function (passport) {

    passport.serializeUser((user, done) => {
        user = (({id, name}) => ({id, name}))(user); //Subset user to get only 2 properties "id" and "name"
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        User.findById(user.id, (err, user) => {
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