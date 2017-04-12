/**
 * Created by kevinkreuzer on 08.04.17.
 */
import SettingsDialogController from './settings/settings-dialog.controller'

export default class ToolbarController {
    constructor($mdSidenav, $mdDialog) {
        this.$mdSidenav = $mdSidenav
        this.$mdDialog = $mdDialog
    }

    toggleSidenav(menuId) {
        this.$mdSidenav(menuId).toggle()
    }

    showAdvanced(ev) {
        this.$mdDialog.show({
            controller: SettingsDialogController,
            templateUrl: 'components/toolbar/settings/settings-dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false
        })
            .then(function(answer) {
                console.log('Handle answer', answer)
            }, function() {
                console.log('Handle cancel')
            });
    };
}
