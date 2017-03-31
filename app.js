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

var backend = process.env.BACKEND || 'http://localhost:8080'
console.log('Backend: ', backend)

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

  app.get('/offersRedirect/*', function (req, res) {
    var target = `${backend}/offers/${req.params[0]}${req._parsedUrl.search}`
    request(target).pipe(res)
  })

  app.listen(port)

  if (swaggerExpress.runner.swagger.paths['/offers/']) {
    console.log('try this:\ncurl http://127.0.0.1:' + port + '/docs')
  }
})
