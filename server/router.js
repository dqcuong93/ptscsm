const stockHolder = require('./db/stockholder'),

    configure = function (app) {
        app.get('/', (req, res) => {
            res.render('home', {
                title: 'HOME'
            });
        });

        app.post('/login', (req, res) => {
            console.log(req.body);
            res.render('login_success', {
                title: 'WELCOME',
                user: 'Cường'
            })
        });

        app.get('/attend', (req, res) => {
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

module.exports = {
    configure
};