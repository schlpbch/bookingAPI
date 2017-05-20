/**
 * Created by kevinkreuzer on 16.05.17.
 */
const AUTH_KEY = 'bookingAPI.auth'
const UNAUTHORIZED_USERNAME = 'Unauthorized'
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
        return this.$http.get(this.config.basicAuth_url, {headers: headers})
            .then(res => {
                this._storeToken(res.data)
            })
    }

    getAuthHeader() {
        return {
            'Authorization': 'Bearer ' + this._extractTokenFromStorage()
        }
    }

    _storeToken(tokenWithPrefix) {
        const token = tokenWithPrefix ? tokenWithPrefix.split(' ')[1] : undefined
        this.$window.localStorage.setItem(AUTH_KEY, token)
    }

    _isTokenExpired(authToken) {
        return this.jwtHelper.isTokenExpired(authToken);
    }

    getUserNumber() {
        let decodedToken = this._getDecodedToken()
        return decodedToken ? decodedToken.sub : UNAUTHORIZED_USERNAME
    }

    _getDecodedToken() {
        let token = this._extractTokenFromStorage()
        return token ? this.jwtHelper.decodeToken(token) : undefined
    }

    hasValidToken() {
        let token = this._extractTokenFromStorage()
        if (token) {
            return !this._isTokenExpired(token)
        }
        return false
    }

    _extractTokenFromStorage() {
        return this.$window.localStorage.getItem(AUTH_KEY)
    }

    logout() {
        this.$window.localStorage.removeItem(AUTH_KEY);
    }
}
