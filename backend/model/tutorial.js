var connection = require('../connection');

function Tutorial() {
    
    this.get = function (res) {
        console.log('fetching tutorials list');
        connection.acquire(function (err, con) {
            con.query('select * from tutorial', function (err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    this.create = function (tutorial, res) {
        connection.acquire(function (err, con) {
            con.query('insert into tutorial set ?', tutorial, function (err, result) {
                con.release();
                if (err) {
                    res.send({status: 1, message: 'failed to add new tutorial'});
                } else {
                    res.send({status: 0, message: 'successfully added new tutorial'});
                }
            });
        });
    };
}
module.exports = new Tutorial();
