const pool = require('./db_config'),
    findOne = function (email, password, callback) {
        pool.query('SELECT * FROM user_ WHERE email=$1 AND password=$2', [email, password], (err, result) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            return callback(null, result);
        })
    },

    findById = function (id, callback) {
        pool.query('SELECT * FROM user_ WHERE id=$1::int', [id], (err, result) => {
            if (err) {
                console.log(err);
                return callback(err, null);
            }
            return callback(null, result);
        })
    };

module.exports = {
    findOne,
    findById
};