const stockHolder = require('./db/stockholder'),
    user = require('./db/user'),

    configure = function (app, passport) {
        app.get('/', isLoggedIn, (req, res) => {
            res.render('home', {
                title: 'HOME PAGE',
                username: req.session.passport.username
            });
        });

        app.post('/login', passport.authenticate('local', {
            successRedirect: '/login_success',
            failureRedirect: '/login_failed',
            failureFlash: false
        }));

        app.get('/login_failed', (req, res)=> {
            res.render('login_failed', {
                title: 'LOGIN FAILED'
            })
        });

        app.get('/login_success', isLoggedIn, (req, res) => {
            res.render('login_success', {
                title: 'LOGIN SUCCESS',
                username: req.session.passport.username
            })
        });

        app.get('/logout', (req, res) => {
            delete req.session.passport.username;
            req.logout();
            res.redirect('/');
        });

        app.get('/attend', isLoggedIn, (req, res) => {
            res.render('attend/attend', {
                title: 'ATTEND PAGE',
                username: req.session.passport.username
            })
        });

        app.post('/attend', isLoggedIn, (req, res) => {
            reqBody = req.body;
            stockHolder.findStockholders(
                reqBody.stockNumber,
                reqBody.personalPassportId,
                reqBody.name,
                (err, result) => {
                    err ? res.end('Cannot fetch data, something wrong happened') : res.send(result);
                })
        })
    };

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        const userId = req.session.passport.user;
        user.findById(userId, (err, result) => {
            if (err) {
                return res.end('some err');
            }
            req.session.passport.username = result.name;
        });
        return next();
    }

    res.render('home', {
        title: 'HOME PAGE'
    });
}

module.exports = {
    configure,
    isLoggedIn
};