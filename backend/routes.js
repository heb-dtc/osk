var tutorial = require('./model/tutorial');

module.exports = {
    configure: function(app) {
        app.get('/tutorial/', function(req, res) {
            tutorial.get(res);
        });

        app.post('/tutorial/', function(req, res) {
            tutorial.create(req.body, res);
        });
    }
};
