/**
 * Created by kevinkreuzer on 05.05.17.
 */
const request = require('request')

const createReverseProxy = (app, backendReise) => {
    const proxyRequest = (uri, req, res) => {
        request(`${backendReise}/api/${uri}${req.params[0]}${req._parsedUrl.search ? req._parsedUrl.search : ''}`).pipe(res)
    }
    app.get('/redirect_api/locations*', function (req, res) {
        proxyRequest('locations', req, res)
    })
    app.get('/redirect_api/trips*', function (req, res) {
        proxyRequest('trips', req, res)
    })
    app.get('/redirect_api/offers*', function (req, res) {
        proxyRequest('offers', req, res)
    })
    app.get('/redirect_api/prebookings*', function (req, res) {
        proxyRequest('prebookings', req, res)
    })
    app.get('/redirect_api/bookings*', function (req, res) {
        proxyRequest('bookings', req, res)
    })
}
module.exports = createReverseProxy
