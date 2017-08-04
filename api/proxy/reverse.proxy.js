/**
 * Created by kevinkreuzer on 05.05.17.
 */
'use strict'
const request = require('request')
const REDIRECT_API = '/redirect_api/'
const createReverseProxy = (app, environmentConfiguration) => {
    const proxyAPIRequest = (env, clientRequest, clientResponse) => {
        let headers = clientRequest.headers
        let url = clientRequest.url.replace(REDIRECT_API, environmentConfiguration['backend_' + env] + '/api/')

        //TODO: Use Certificate solution instead of rejectUnauthorized: false
        delete headers.host;
        request(url, {headers, rejectUnauthorized: false}, function (err, res, body) {
            var manipulatedBody = body.toString();
            for (var e in environmentConfiguration) {
                if(e.startsWith("backend")) {
                    var regExp = new RegExp(environmentConfiguration[e] + "/api/", "g");
                    manipulatedBody = manipulatedBody.replace(regExp, environmentConfiguration['backend_bookingapi'] + "/redirect_api/");
                }
            }
            if(res.headers['content-type'] != undefined) {
                clientResponse.setHeader('Content-Type', res.headers['content-type']);
            }
            clientResponse.send(manipulatedBody);
        });
    };

    app.get(REDIRECT_API + 'locations*', function (clientRequest, clientResponse) {
        proxyAPIRequest('locations', clientRequest, clientResponse)
    });

    app.get(REDIRECT_API + 'prices*', function (clientRequest, clientResponse) {
        proxyAPIRequest('prices', clientRequest, clientResponse)
    });

    app.get(REDIRECT_API + 'trips*', function (clientRequest, clientResponse) {
        proxyAPIRequest('trips', clientRequest, clientResponse)
    });

    app.get(REDIRECT_API + 'offers*', function (clientRequest, clientResponse) {
        proxyAPIRequest('offers', clientRequest, clientResponse)
    });

    app.get(REDIRECT_API + 'prebookings*', function (clientRequest, clientResponse) {
        proxyAPIRequest('prebookings', clientRequest, clientResponse)
    });

    app.get(REDIRECT_API + 'bookings*', function (clientRequest, clientResponse) {
        proxyAPIRequest('bookings', clientRequest, clientResponse)
    });

    app.get('/basicAuth/login', function (clientRequest, clientResponse) {
        let headers = clientRequest.headers
        let basicAuthURL = environmentConfiguration.basicAuth_url
        //TODO: Use Certificate solution instead of rejectUnauthorized: false
        request(basicAuthURL, {headers, rejectUnauthorized: false}, function (request, response) {
            if (response.statusCode === 200) {
                clientResponse.send(response.headers.authorization)
            } else {
                clientResponse.status(401).send({
                    message: 'Wrong username or password'
                });
            }
        })
    })
};

module.exports = createReverseProxy;