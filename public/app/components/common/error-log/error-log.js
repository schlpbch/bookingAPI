/**
 * Created by kevinkreuzer on 16.04.17.
 */
import errorLogController from './error-log.controller';

let moduleName = 'errorLog';

angular.module(moduleName, [])
    .component('apiErrorLog', {
        controller: errorLogController,
        templateUrl: 'components/common/error-log/error-log.html'
    });

export default moduleName;
