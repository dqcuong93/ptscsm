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
    });

    app.post('/attend', (req, res) => {
        console.log(req.body);
        res.end('WELL DONE')
    })

};

module.exports = {
    configure
};