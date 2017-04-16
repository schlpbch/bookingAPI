/**
 * Created by kevinkreuzer on 16.04.17.
 */
import errorLogController from './error-log.controller';
import errorLogService from './error-log.service';
let moduleName = 'errorLog';

angular.module(moduleName, [])
    .component('apiErrorLog', {
        controller: errorLogController,
        templateUrl: 'components/common/error-log/error-log.html'
    })
    .service('errorLogService', errorLogService);

export default moduleName;
