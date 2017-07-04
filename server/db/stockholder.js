var pool = require('db_config');

var findAllStockholders = pool.query('SELECT * FROM stockholder', [], (err, result)=>{
    if (err){
        return console.error(err);
    }
    return console.log(result)
});

module.exports = {
    findAllStockholders
};