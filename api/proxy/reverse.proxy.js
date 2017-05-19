/**
 * Created by kevinkreuzer on 05.05.17.
 */
'use strict'
const request = require('request')
const REDIRECT_API = '/redirect_api/'
const createReverseProxy = (app, environmentConfiguration) => {

    const proxyAPIRequest = (clientRequest, clientResponse) => {
        let headers = clientRequest.headers
        let url = clientRequest.url.replace(REDIRECT_API, `${environmentConfiguration.backendReise}/api/`)
        //TODO: Use Certificate solution instead of rejectUnauthorized: false
        request(url, {headers, rejectUnauthorized: false}).pipe(clientResponse)
    }

    app.get('/redirect_api/*', function(clientRequest, clientResponse){
       proxyAPIRequest(clientRequest, clientResponse)
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
