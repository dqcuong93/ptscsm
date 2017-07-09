const stockHolder = require('./db/stockholder'),
    user = require('./passport').username,

    configure = function (app, passport) {
        app.get('/', isLoggedIn, (req, res) => {
            console.log(username);
            res.render('home', {
                title: 'HOME',
                user: username
            });
        });

        app.post('/login', passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: false
        }));

        app.get('/attend', isLoggedIn, (req, res) => {
            res.render('attend/attend', {
                title: 'ATTEND',
                user: username
            })
        });

        app.post('/attend', isLoggedIn, (req, res) => {
            reqBody = req.body;
            stockHolder.findStockholders(
                reqBody.stockNumber,
                reqBody.personalPassportId,
                reqBody.name,
                (err, result) => {
                    err ? res.send('Cannot fetch data, something wrong happened') : res.send(result);
                })
        })
    };

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.render('home', {
        title: 'HOME'
    });
}

module.exports = {
    configure
};