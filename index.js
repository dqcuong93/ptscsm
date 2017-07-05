const express = require('express');
const exphbs = require('express-handlebars');
const router = require('./server/router');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

router.configure(app);

const server = app.listen(PORT, () => {
    console.log('Server listening on port: ' + server.address().port);
});