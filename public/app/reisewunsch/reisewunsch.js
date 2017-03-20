/**
 * Created by kevinkreuzer on 17.03.17.
 */
import reisewunschController from './reisewunsch.controller';
import stationController from './station/station.controller';
import reisewunschService from './reisewunsch.service';

let moduleName = 'reisewunsch';

angular.module(moduleName, [])
  .component('apiReisewunsch', {
    controller: reisewunschController,
    templateUrl: 'app/reisewunsch/reisewunsch.html'
  })
  .component('apiStation', {
    bindings: {
      title: '<'
    },
    controller: stationController,
    templateUrl: 'app/reisewunsch/station/station.html'
  })
  .service('reisewunschService', reisewunschService)

export default moduleName;
