/**
 * Created by kevinkreuzer on 08.04.17.
 */
import settingsDialogController from './settings/settings-dialog.controller';

export default class ToolbarController {
    constructor($mdSidenav, $mdDialog, authService) {
        this.$mdSidenav = $mdSidenav
        this.$mdDialog = $mdDialog
        this.authService = authService
    }

    toggleSidenav(menuId) {
        this.$mdSidenav(menuId).toggle()
    }

    showAdvanced(ev) {
        this.$mdDialog.show({
            controller: settingsDialogController,
            controllerAs: '$ctrl',
            templateUrl: 'components/toolbar/settings/settings-dialog.html',
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

    logout(){
        this.authService.logout()
    }
}
