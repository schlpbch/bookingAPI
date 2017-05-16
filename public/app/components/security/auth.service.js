/**
 * Created by kevinkreuzer on 16.05.17.
 */

export default class AuthService {

    constructor($http, config) {
        this.$http = $http
        this.config = config
    }

    login(username, password) {
        let credentials = window.btoa(`${username}:${password}`)
        let headers = {"Authorization": "Basic " + credentials}
        this.$http.get(this.config.basicAuth_url, {headers: headers})
            .then(res => {
                let token = res.data
            })
    }
}
