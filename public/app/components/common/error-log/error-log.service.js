/**
 * Created by kevinkreuzer on 16.04.17.
 */
import errorSheetController from './error-sheet/error-sheet.controller'
export default class ErrorLogService {

    constructor($mdBottomSheet) {
        this.$mdBottomSheet = $mdBottomSheet
        this.errors = [];
    }

    newError(errorCode, errorMessage) {
        this.errors.push(this._createError(errorCode, errorMessage))
        this.openButtomSheet();
    }

    openButtomSheet(){
        this.$mdBottomSheet.show({
            templateUrl: 'components/common/error-log/error-sheet/error-sheet.html',
            controller: errorSheetController,
            controllerAs: '$ctrl'
        });
    }

    _createError(code, message) {
        return {code, message};
    }

    hasErrors(){
       return this.errors.length > 0
    }
}
