/**
 * Created by kevinkreuzer on 20.03.17.
 */
import connetionController from './connections.controller';

let moduleName = 'connectionsModule';

angular.module(moduleName, [])
  .component('apiConnections', {
    controller: connetionController,
    templateUrl: 'app/connections/connections.html'
  })
  .component('apiConnectionDetail', {
    bindings: {
      trips: '<'
    },
    templateUrl: 'app/connections/connection-detail/connection-detail.html'
  })

export default moduleName;
