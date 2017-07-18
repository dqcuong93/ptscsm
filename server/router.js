const
    stockHolder = require('./db/stockholder'),
    user = require('./db/user'),

    configure = function (app, passport) {
        app.get('/', isLoggedIn, (req, res) => {
            console.log(req.session.passport.username);
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

        app.get('/login_failed', (req, res) => {
            res.render('login_failed', {
                title: 'LOGIN FAILED'
            })
        });

        app.get('/login_success', isLoggedIn, (req, res) => {
            console.log(req.session.passport.username);
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

        app.get('/checking', isLoggedIn, (req, res) => {
            res.render('attend/checking', {
                title: 'Stockholders checking',
                username: req.session.passport.username
            })
        });

        app.post('/checking', isLoggedIn, (req, res) => {
            var body = req.body,
                stockNumber = body.stockNumber,
                personalPassportId = body.personalPassportId,
                name = body.name;

            stockHolder.findStockholders(stockNumber, personalPassportId, name, (err, result) => {
                err ? res.send('Cannot fetch data, something wrong happened') : res.send(result);
            })
        })

        app.get('/ticking', isLoggedIn, (req, res) => {
            res.render('attend/ticking', {
                title: "Tickets ticking"
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