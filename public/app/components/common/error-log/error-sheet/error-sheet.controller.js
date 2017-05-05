/**
 * Created by kevinkreuzer on 16.04.17.
 */
export default function (errorLogService, $timeout) {
    this.errorLogService = errorLogService
    this.$timeout = $timeout

    this.onSuccess = function (e) {
        this.copySuccessfull = true
        e.clearSelection();
        this.$timeout(() => {
            this.copySuccessfull = false
        }, 2000)
    };
}
