/**
 * Created by kevinkreuzer on 16.04.17.
 */
import errorSheetController from './error-sheet/error-sheet.controller';

export default class ErrorLogController {

    constructor($mdBottomSheet) {
        this.$mdBottomSheet = $mdBottomSheet;
    }

    showErrorLog() {
        this.$mdBottomSheet.show({
            templateUrl: 'components/common/error-log/error-sheet/error-sheet.html',
            controller: errorSheetController,
            controllerAs: '$ctrl'
        });
    }
}
