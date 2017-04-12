/**
 * Created by kevinkreuzer on 12.04.17.
 */
export default class SettingsDialogController {

    constructor($mdDialog) {
        this.$mdDialog = $mdDialog;
    }

    hide() {
        this.$mdDialog.hide();
    };

    cancel() {
        this.mdDialog.cancel();
    };

    answer(answer) {
        this.mdDialog.hide(answer);
    };
}
