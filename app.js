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
console.info('Backend Reise: ', environmentConfiguration.backendReise)
console.info('Backend Orch: ', environmentConfiguration.backendOrch)

require('ssl-root-cas').inject();

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
