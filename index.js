const express = require('express'),
    exphbs = require('express-handlebars'),
    router = require('./server/router'),
    path = require('path'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    pgSession = require('connect-pg-simple')(session),
    Pool = require('./server/db/db_config'),
    pgPool = Pool.pool,
    passport = require('passport'),

    app = express(),
    PORT = 8080;

require('./server/passport')(passport); // pass passport for configuration

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    store: new pgSession({
        pool: pgPool,                // Connection pool
        tableName: 'user_session'   // Use another table-name than the default "session" one
    }),
    secret: 'ptscsm',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge: 5 * 60 * 1000} // 5 minutes
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

router.configure(app, passport); // load our routes and pass in our app and fully configured passport

const server = app.listen(PORT, () => {
    console.log('Server listening on port: ' + server.address().port);
});