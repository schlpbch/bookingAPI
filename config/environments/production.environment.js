/**
 * Created by kevinkreuzer on 12.05.17.
 */
module.exports = {
    backend_locations: process.env.BACKEND_LOCATIONS || 'http://localhost:8080',
    backend_prices: process.env.BACKEND_PRICES || 'http://localhost:8080',
    backend_trips: process.env.BACKEND_TRIPS || 'http://localhost:8080',
    backend_offers: process.env.BACKEND_OFFERS || 'http://localhost:8080',
    backend_prebookings: process.env.BACKEND_PREBOOKINGS || 'http://localhost:8080',
    backend_bookings: process.env.BACKEND_BOOKINGS || 'http://localhost:8080',
    basicAuth_url: 'https://zvs-api-test-ws.sbb.ch/login-jwt',
    appPort: process.env.PORT || 8080,
    morganFormat: 'common'
}
