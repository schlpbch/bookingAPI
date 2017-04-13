/**
 * Created by kevinkreuzer on 12.04.17.
 */
const CONTRIBUTORS_URL = 'https://api.github.com/repos/schlpbch/bookingAPI/contributors'
export default class SettingsService {
    constructor($http){
        this.$http = $http
    }

    loadContributors(){
        return this.$http.get(CONTRIBUTORS_URL)
    }
}
