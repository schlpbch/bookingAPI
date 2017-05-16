/**
 * Created by kevinkreuzer on 12.05.17.
 */
module.exports = {
    backendReise: process.env.BACKEND_REISE || 'http://localhost:8080',
    backendOrch: process.env.BACKEND_ORCH || 'http://localhost:8080',
    basicAuth_url: 'https://zvs-api-test-ws.sbb.ch/login-jwt',
    appPort: process.env.PORT || 8080,
    morganFormat: 'dev'
}
