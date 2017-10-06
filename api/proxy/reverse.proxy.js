/**
 * Created by kevinkreuzer on 05.05.17.
 */
'use strict'
const request = require('request')
const REDIRECT_API = '/redirect_api/'

function _generateUUID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

const createReverseProxy = (app, environmentConfiguration) => {
    const proxyAPIRequest = (httpMethod, env, clientRequest, clientResponse) => {
        let headers = clientRequest.headers
        let url = clientRequest.url.replace(REDIRECT_API, environmentConfiguration['backend_' + env] + '/api/')

        //TODO: Use Certificate solution instead of rejectUnauthorized: false
        delete headers.host;
        headers['X-Contract-Id'] = 'SBB_PAR_ID_4711';
        headers['X-Conversation-Id'] = _generateUUID();
        headers['Accept-Language'] = 'en';
        request(url, {headers, method: httpMethod, rejectUnauthorized: false}, function (err, res, body) {
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
        proxyAPIRequest('GET', 'locations', clientRequest, clientResponse)
    });

    app.get(REDIRECT_API + 'prices*', function (clientRequest, clientResponse) {
        proxyAPIRequest('GET', 'prices', clientRequest, clientResponse)
    });

    app.get(REDIRECT_API + 'trips*', function (clientRequest, clientResponse) {
        proxyAPIRequest('GET', 'trips', clientRequest, clientResponse)
    });

    app.get(REDIRECT_API + 'offers*', function (clientRequest, clientResponse) {
        proxyAPIRequest('GET', 'offers', clientRequest, clientResponse)
    });

    app.put(REDIRECT_API + 'prebookings*', function (clientRequest, clientResponse) {
        proxyAPIRequest('PUT', 'prebookings', clientRequest, clientResponse)
    });

    app.put(REDIRECT_API + 'bookings*', function (clientRequest, clientResponse) {
        proxyAPIRequest('PUT', 'bookings', clientRequest, clientResponse)
    });

    app.get(REDIRECT_API + 'bookings*', function (clientRequest, clientResponse) {
        proxyAPIRequest('GET', 'bookings', clientRequest, clientResponse)
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