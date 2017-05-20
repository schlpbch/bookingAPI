/**
 * Created by kevinkreuzer on 16.03.17.
 */
import loginController from '../login/login.controller'

export default class SidenavController {
    constructor($mdDialog) {
        this.$mdDialog = $mdDialog
    }

    showBasicAuthLogin(ev) {
        console.log('Hier')
        this.$mdDialog.show({
            controller: loginController,
            controllerAs: '$ctrl',
            templateUrl: 'components/login/login.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true,
            fullscreen: false
        })
            .then(function (answer) {
                console.log('You changed the mode of the mock to disabled: ', answer)
            }, function () {
                //Handle cancel
            });
    }
}
