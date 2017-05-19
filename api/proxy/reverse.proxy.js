/**
 * Created by kevinkreuzer on 05.05.17.
 */
'use strict'
const appendQuery = require('append-query')
const request = require('request')
const createReverseProxy = (app, environmentConfiguration) => {

    const proxyAPIRequest = (uri, req, res) => {
        let backendReise = environmentConfiguration.backendReise
        request(`${backendReise}/api/${uri}${req.params[0]}${req._parsedUrl.search ? req._parsedUrl.search : ''}`).pipe(res)
    }
    app.get('/redirect_api/locations*', function (req, res) {
        proxyAPIRequest('locations', req, res)
    })
    app.get('/redirect_api/trips*', function (req, res) {
        proxyAPIRequest('trips', req, res)
    })
    app.get('/redirect_api/offers*', function (clientRequest, clientResponse) {
        let headers = clientRequest.headers
        let basicAuthURL = 'https://zvs-api-test-ws.sbb.ch/api/offers'
        let url = appendQuery(basicAuthURL, clientRequest.query)
        console.log('Calling the following url', url)
        //TODO: Use Certificate solution instead of rejectUnauthorized: false
        request(url, {headers, rejectUnauthorized: false}, function (request, response) {
            if (response.statusCode === 200) {
                clientResponse.send(response.body)
            }
            else {
                clientResponse.status(500).send({
                    message: 'Ouupsi'
                });
            }
        })
    })
    app.get('/redirect_api/prebookings*', function (req, res) {
        proxyAPIRequest('prebookings', req, res)
    })
    app.get('/redirect_api/bookings*', function (req, res) {
        proxyAPIRequest('bookings', req, res)
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
