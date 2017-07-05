const pool = require('./db_config');

const findStockholders = function (stockNumber, personalPassportId, name, callback) {
    pool.query('SELECT * FROM stockholder WHERE stocknumber=$1 OR personalpassportid=$2 OR name=$3', [stockNumber, personalPassportId, name], (err, result) => {
        err ? console.log(err) : console.log('Success');
        return callback(result);
    })
};

module.exports = {
    findStockholders
};