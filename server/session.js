const session = require('express-session'),
    pgSession = require('connect-pg-simple')(session),
    Pool = require('./db/db_config'),
    pgPool = Pool.pool,

    config = function () {
        session({
            store: new pgSession({
                pool: pgPool,                // Connection pool
                tableName: 'user_session'   // Use another table-name than the default "session" one
            }),
            secret: 'ptscsm',
            resave: false,
            saveUninitialized: true,
            cookie: {maxAge: 60 * 1000} // 60 seconds
        })
    };

module.exports = {
    config
};