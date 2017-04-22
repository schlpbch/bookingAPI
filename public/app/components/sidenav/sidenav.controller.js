/**
 * Created by kevinkreuzer on 16.03.17.
 */

export default class SidenavController {
    constructor($auth) {
        this.$auth = $auth;
        this.items = [
            {
                icon: 'exit_to_app',
                title: 'With SwissPassID',
                provider: 'https://www.swisspass.ch/auth/login'
            },
            {
                icon: 'exit_to_app',
                title: 'With B2B-Account',
                provider: 'https://www.swisspass.ch/auth/login'
            },
            {
                icon: 'exit_to_app',
                title: 'Github Login',
                provider: 'github'
            }
        ]
    }

    authenticate(provider){
        this.$auth.authenticate(provider);
    }
}
