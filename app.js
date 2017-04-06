'use strict'

var SwaggerExpress = require('swagger-express-mw')
var SwaggerUi = require('swagger-tools/middleware/swagger-ui')
var express = require('express')
var path = require('path')
var request = require('request')
var app = express()

module.exports = app // for testing

var config = {
  appRoot: __dirname // required config
}

var backendReise = process.env.BACKEND_REISE || 'http://localhost:8080'
console.log('Backend Reise: ', backendReise)
var backendOrch = process.env.BACKEND_ORCH || 'http://localhost:8080'
console.log('Backend Orch: ', backendOrch)

SwaggerExpress.create(config, function (err, swaggerExpress) {
  if (err) {
    throw err
  }

    // install middleware

  app.use(SwaggerUi(swaggerExpress.runner.swagger))
  swaggerExpress.register(app)

  var port = process.env.PORT || 8080

    // set static files location used for requests that our frontend will make
  app.use(express.static(path.join(__dirname, '/public')))

  app.get('/redirect_api/offers*', function (req, res) {
      request(`${backendReise}/api/offers${req.params[0]}${req._parsedUrl.search ? req._parsedUrl.search : ''}`).pipe(res);
  });
  app.get('/redirect_api/prebookings*', function (req, res) {
      request(`${backendOrch}/api/prebookings${req.params[0]}${req._parsedUrl.search ? req._parsedUrl.search : ''}`).pipe(res);
  });
  app.get('/redirect_api/bookings*', function (req, res) {
      request(`${backendOrch}/api/bookings${req.params[0]}${req._parsedUrl.search ? req._parsedUrl.search : ''}`).pipe(res);
  });

  app.listen(port)

  if (swaggerExpress.runner.swagger.paths['/offers']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/docs')
  }
})
