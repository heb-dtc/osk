var mysql = require('mysql');

function Connection() {
    
    this.pool = null;

    this.init = function() {
        console.log('init repository access via: ' + process.env.DATABASE_HOST);
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: process.env.DATABASE_HOST || '127.0.0.1',
            user: 'osk',
            password: 'kso',
            database: 'officeSharedKnowledge',
            port: 3306
        });
    };

    this.acquire = function(callback) {
        console.log('Access repository');
        this.pool.getConnection(function(err, connection) {
            callback(err, connection);
        });
    };
}

module.exports = new Connection();
