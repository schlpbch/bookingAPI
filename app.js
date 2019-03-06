'use strict'
global._ = require('underscore')
const querystring = require('querystring')
const uuid = require('uuid/v4')
const request = require('request')
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

  let clientId = '***'
  let clientSecret = '***'

  if (swaggerExpress.runner.swagger.paths['/offers']) {
    console.log('try this: http://localhost:' + environmentConfiguration.appPort + '/app')

    global.CONTRACT_ID = 'ACP1024'
    global.CONVERSATION_ID = uuid()
    global.MOCKED = clientSecret.length <= 3

    if (!global.MOCKED) {
      global.getToken = function() {
        if (global.TOKEN_VALIDITY && (Date.now() + 10000) < global.TOKEN_VALIDITY) {
          return global.TOKEN;
        } else {
          var form = {
            grant_type: 'client_credentials',
            scope: '',
            client_id: clientId,
            client_secret: clientSecret
          }

          var formData = querystring.stringify(form)
          var contentLength = formData.length

          request({
            headers: {
              'Content-Length': contentLength,
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            uri: 'https://sso-int.sbb.ch/auth/realms/SBB_Public/protocol/openid-connect/token',
            body: formData,
            method: 'POST'
          }, function (err, response, body) {
            if (!!err) {
              console.log(err)
            }
            global.TOKEN = JSON.parse(body).access_token
            global.TOKEN_VALIDITY = Date.now() + JSON.parse(body).expires_in
          })

          return global.TOKEN;
        }
      }
      global.getToken();
    }
  }
})
