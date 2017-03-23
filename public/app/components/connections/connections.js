/**
 * Created by kevinkreuzer on 20.03.17.
 */
import connetionController from './connections.controller';
import connectionDetailController from './connection-detail/connection-detail.controller';
import connectionService from './connections.service';

let moduleName = 'connectionsModule';

angular.module(moduleName, [])
  .component('apiConnections', {
    controller: connetionController,
    templateUrl: 'components/connections/connections.html'
  })
  .component('apiConnectionDetail', {
    bindings: {
      trip: '<'
    },
    controller: connectionDetailController,
    templateUrl: 'components/connections/connection-detail/connection-detail.html'
  })
  .service('connectionService', connectionService);

export default moduleName;
