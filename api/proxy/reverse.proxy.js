/**
 * Created by kevinkreuzer on 05.05.17.
 */
'use strict'
const request = require('request')
const REDIRECT_API = '/redirect_api/'
const createReverseProxy = (app, environmentConfiguration) => {

    const proxyAPIRequest = (baseURL, path, clientRequest, clientResponse) => {
        let headers = clientRequest.headers
        let url = clientRequest.url.replace(REDIRECT_API, `${environmentConfiguration.backendReise}/api/`)
        //TODO: Use Certificate solution instead of rejectUnauthorized: false
        request(url, {headers, rejectUnauthorized: false}).pipe(clientResponse)
    }

    const proxyReiseRequest = (path, clientRequest, clientResponse) => {
        proxyAPIRequest(environmentConfiguration.backendReise, path, clientRequest, clientResponse)
    }

    app.get('/redirect_api/locations*', function (clientRequest, clientResponse) {
        proxyReiseRequest('locations', clientRequest, clientResponse)
    })

    app.get('/redirect_api/trips*', function (clientRequest, clientResponse) {
        proxyReiseRequest('trips', clientRequest, clientResponse)
    })

    app.get('/redirect_api/offers*', function (clientRequest, clientResponse) {
        proxyReiseRequest('offers', clientRequest, clientResponse)
    })

    app.get('/redirect_api/prebookings*', function (clientRequest, clientResponse) {
        proxyReiseRequest('prebookings', clientRequest, clientResponse)
    })

    app.get('/redirect_api/bookings*', function (clientRequest, clientResponse) {
        proxyReiseRequest('bookings', clientRequest, clientResponse)
    })

    app.get('/basicAuth/login', function (clientRequest, clientResponse) {
        let headers = clientRequest.headers
        let basicAuthURL = environmentConfiguration.basicAuth_url
        //TODO: Use Certificate solution instead of rejectUnauthorized: false
        request(basicAuthURL, {headers, rejectUnauthorized: false}, function (request, response) {
            if (response.statusCode === 200) {
                clientResponse.send(response.headers.authorization)
            }
            else {
                clientResponse.status(401).send({
                    message: 'Wrong username or password'
                });
            }
        })
    })
}
module.exports = createReverseProxy
