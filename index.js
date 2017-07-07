const express = require('express'),
    exphbs = require('express-handlebars'),
    router = require('./server/router'),
    path = require('path'),
    bodyParser = require('body-parser'),

    app = express(),
    PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

router.configure(app);

const server = app.listen(PORT, () => {
    console.log('Server listening on port: ' + server.address().port);
});