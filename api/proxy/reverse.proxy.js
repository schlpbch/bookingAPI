/**
 * Created by kevinkreuzer on 05.05.17.
 */
'use strict'
const request = require('request')
const REDIRECT_API = '/redirect_api/'
let bodyParser = require('body-parser');


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
        var data = null;
        if (clientRequest._body) {
            data = clientRequest.body
        }
        var url = clientRequest.url.replace(REDIRECT_API, environmentConfiguration['backend_' + env] + '/api/')

        let gfid = _generateUUID();

        //TODO: Use Certificate solution instead of rejectUnauthorized: false
        delete headers.host;
        headers['X-Contract-Id'] = 'SBB_PAR_ID_4711';
        headers['X-Conversation-Id'] = gfid;
        headers['Accept-Language'] = 'en';

        // i know, quick and dirty!
        if (url.indexOf("?contentType=") !== -1) {
            let start = url.indexOf("?contentType=")
            let end = url.length
            let contentType = url.substring(start, end).replace("\?contentType\=", '')
            headers['Accept'] = contentType;

            console.log('contentType', contentType)

            url = url.substring(0, start)
        }

        console.log('gfid', gfid)
        console.log('die url', url)
        console.log('wir senden', data)

        request(url, {
            headers,
            method: httpMethod,
            body: JSON.stringify(clientRequest.body),
            rejectUnauthorized: false,
            encoding: null
            }, function (err, res, body) {

            if (res.headers['content-type'] != undefined) {
                clientResponse.setHeader('Content-Type', res.headers['content-type']);
            }
            if(res.headers['content-type'] === "image/png" || res.headers['content-type'] === "application/pdf" || res.headers['content-type'] === "application/vnd.apple.pkpass") {
                clientResponse.send(body);
            } else {
                console.log('error:', err);
                console.log('statusCode:', res && res.statusCode);

                var manipulatedBody = body.toString();
                for (var e in environmentConfiguration) {
                    if (e.startsWith("backend")) {
                        var regExp = new RegExp(environmentConfiguration[e] + "/api/", "g");
                        manipulatedBody = manipulatedBody.replace(regExp, environmentConfiguration['backend_bookingapi'] + "/redirect_api/");
                    }
                }
                clientResponse.send(manipulatedBody);
            }
        });

    };

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

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

    app.put(REDIRECT_API + 'prebookings', function (clientRequest, clientResponse) {
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