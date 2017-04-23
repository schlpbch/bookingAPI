/**
 * Created by kevinkreuzer on 16.03.17.
 */

export default class SidenavController {
    constructor($auth) {
        this.$auth = $auth;
        this.items = [
            {
                title: 'With SwissPassID',
                provider: 'https://www.swisspass.ch/auth/login'
            },
            {
                title: 'With B2B-Account',
                provider: 'https://www.swisspass.ch/auth/login'
            },
            {
                icon: 'github',
                title: 'Login with GitHub',
                provider: 'github'
            }
        ]
    }

    authenticate(provider){
        this.$auth.authenticate(provider);
    }
}
