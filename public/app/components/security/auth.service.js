/**
 * Created by kevinkreuzer on 23.04.17.
 */
const AUTH_TOKEN_NAME = 'satellizer_token'
export default class AuthService {

    constructor($window, jwtHelper) {
        this.$window = $window
        this.jwtHelper = jwtHelper
    }

    isAuthenticated() {
        return this._getAuthToken() ? true : false
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
        let decodedToken = this.jwtHelper.decodeToken(token)
        console.log('DecodedToken', decodedToken)
        return this.jwtHelper.decodeToken(token)
    }
}
