const configure = function (app) {
    app.get('/', (req, res) => {
        res.render('home', {
            title: 'HOME'
        });
    })
};

module.exports = {
    configure
};