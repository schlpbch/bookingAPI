'use strict';

var SwaggerExpress = require('swagger-express-mw');
var SwaggerUi = require('swagger-tools/middleware/swagger-ui');
var express = require('express');
var app = express();

module.exports = app; // for testing

var config = {
    appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
    if (err) {
        throw err;
    }

    // install middleware

    app.use(SwaggerUi(swaggerExpress.runner.swagger));
    swaggerExpress.register(app);

    var port = process.env.PORT || 8080;

    // set static files location used for requests that our frontend will make
    app.use(express.static(__dirname + '/public/app'));
    app.listen(port);

    if (swaggerExpress.runner.swagger.paths['/angebote']) {
        console.log('try this:\ncurl http://127.0.0.1:' + port + '/angebote');
    }
});
