const
    pool = require('./db_config'),

    findStockholders = function (stockNumber, personalPassportId, name, callback) {
        name = '%' + name + '%';
        pool.query('SELECT * FROM stockholder WHERE stocknumber LIKE($1) OR personalpassportid LIKE($2) OR LOWER(name) LIKE LOWER($3)',
            [stockNumber, personalPassportId, name],
            (err, result) => {
                if (err) {
                    console.log(err);
                    return callback(err, null);
                }
                console.log('Success! ' + result.rows.length + ' user(s) found');
                return callback(null, result.rows)
            })
    },

    findStocknumber = function (stocknumber, callback) {
        pool.query('SELECT * FROM stockholder WHERE stocknumber=$1', [stocknumber], (err, result) => {
            if (err) {
                console.log('Cannot find this stockholder');
                return callback(err, null);
            }
            console.log('Stockholder found');
            return callback(null, result);
        })
    };

module.exports = {
    findStockholders,
    findStocknumber
};