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
        return this.$http.get(this.config.basicAuth_url, {headers: headers})
            .then(res => {
                if (res.data) {
                    this._storeToken(res.data)
                }
            })
    }

    getAuthHeader(){
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
        return this._getDecodedToken().sub
    }

    _getDecodedToken() {
        let token = this._extractTokenFromStorage()
        return this.jwtHelper.decodeToken(token)
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
