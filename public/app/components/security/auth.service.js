/**
 * Created by kevinkreuzer on 23.04.17.
 */
const AUTH_TOKEN_NAME = 'satellizer_token'
export default class AuthService {

    constructor($window, jwtHelper, $http) {
        this.$window = $window
        this.jwtHelper = jwtHelper
        this.$http = $http
    }

    isAuthenticated() {
        let authToken = this._getAuthToken();
        if (authToken) {
            return !this._isTokenExpired(authToken)
        }
        return false
    }

    _isTokenExpired(authToken) {
        return this.jwtHelper.isTokenExpired(authToken);
    }

    _getAuthToken() {
        let auth = this.$window.localStorage.getItem(AUTH_TOKEN_NAME);
        if (auth) {
            return auth;
        }
        return null
    }

    getAuthData() {
        let token = this._getAuthToken()
        return this.jwtHelper.decodeToken(token)
    }

    getClientId() {
        return this.$http.get('/clientId');
    }

    logout() {
        this.$window.localStorage.removeItem(AUTH_TOKEN_NAME);
    }
}
