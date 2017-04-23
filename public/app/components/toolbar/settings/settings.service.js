/**
 * Created by kevinkreuzer on 12.04.17.
 */
export default class SettingsService {
    constructor($http) {
        this.$http = $http
    }

    loadContributors() {
        return this.$http.get('/contributors')
    }
}
