/**
 * Created by kevinkreuzer on 12.04.17.
 */
export default function SettingsController($mdDialog, settingsService) {
    this.$mdDialog = $mdDialog;
    this.contributors = [];
    settingsService.loadContributors()
        .then(res => {
            this.contributors = res.data;
        }, () => {
            this.loadingFailed = true;
        });

    this.cancel = function () {
        this.$mdDialog.cancel();
    };

    this.apply = function () {
        this.$mdDialog.hide(this.isMockDisabled);
    };
}
