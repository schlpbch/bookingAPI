'use strict'
var SwaggerExpress = require('swagger-express-mw')
var SwaggerUi = require('swagger-tools/middleware/swagger-ui')
var express = require('express')
var path = require('path')
var createReverseProxy = require('./api/proxy/reverse.proxy')
var morgan = require('morgan')
const environmentConfigLoader = require('./config/environments/environment.loader')
var app = express()

module.exports = app // for testing
var config = {
    appRoot: __dirname // required config
}
const environmentConfiguration = environmentConfigLoader.loadEnvironmentConfig()
console.info('Backend locations: ', environmentConfiguration['backend_locations'])
console.info('Backend trips: ', environmentConfiguration['backend_trips'])
console.info('Backend prices: ', environmentConfiguration['backend_prices'])
console.info('Backend offers: ', environmentConfiguration['backend_offers'])
console.info('Backend prebookings: ', environmentConfiguration['backend_prebookings'])
console.info('Backend bookings: ', environmentConfiguration['backend_bookings'])

SwaggerExpress.create(config, function (err, swaggerExpress) {
    if (err) {
        throw err
    }
    // install middleware
    app.use(SwaggerUi(swaggerExpress.runner.swagger))
    swaggerExpress.register(app)
    app.use(morgan(environmentConfiguration.morganFormat))
    app.use(express.static(path.join(__dirname, '/public')))
    createReverseProxy(app, environmentConfiguration)
    app.listen(environmentConfiguration.appPort)

    if (swaggerExpress.runner.swagger.paths['/offers']) {
        console.log('try this: http://localhost:' + environmentConfiguration.appPort + '/app')
    }
})
