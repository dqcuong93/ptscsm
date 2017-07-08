const stockHolder = require('./db/stockholder'),

    configure = function (app, passport) {
        app.get('/', (req, res) => {
            res.render('home', {
                title: 'HOME'
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
            })
        });

        app.post('/attend', (req, res) => {
            reqBody = req.body;
            stockHolder.findStockholders(
                reqBody.stockNumber,
                reqBody.personalPassportId,
                reqBody.name,
                (result) => {
                    result ? res.send(result) : res.send('Cannot fetch data');
                })
        })
    };

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect('/');
}

module.exports = {
    configure
};