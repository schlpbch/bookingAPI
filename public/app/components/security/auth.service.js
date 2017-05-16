/**
 * Created by kevinkreuzer on 16.05.17.
 */
const AUTH_KEY = 'bookingAPI.auth'
export default class AuthService {

    constructor($http, config, $window, jwtHelper) {
        this.$http = $http
        this.config = config
        this.$window = $window
        this.jwtHelper = jwtHelper
    }

    login(username, password) {
        let credentials = window.btoa(`${username}:${password}`)
        let headers = {"Authorization": "Basic " + credentials}
        this.$http.get(this.config.basicAuth_url, {headers: headers})
            .then(res => {
                this._storeToken(res.data)
            })
    }

    _storeToken(tokenWithPrefix) {
        this.$window.localStorage.setItem(AUTH_KEY, tokenWithPrefix)
    }

    _isTokenExpired(authToken) {
        return this.jwtHelper.isTokenExpired(authToken);
    }

    hasValidToken() {
        let token = this.extractTokenFromStorage()
        if (token) {
            return !this._isTokenExpired(token)
        }
        return false
    }

    extractTokenFromStorage() {
        let tokenWithPrefix = this.$window.localStorage.getItem(AUTH_KEY)
        return tokenWithPrefix ? tokenWithPrefix.split(' ')[1] : undefined
    }
}
