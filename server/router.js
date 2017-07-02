const configure = function (app) {
    app.get('/', (req, res) => {
        res.render('home', {
            title: 'HOME'
        });
    });

    app.get('/attend', (req, res) => {
        res.render('attend/attend', {
            title: 'ATTEND'
        })
    })
};

module.exports = {
    configure
};