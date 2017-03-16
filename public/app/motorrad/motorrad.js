/**
 * Created by kevinkreuzer on 15.03.17.
 */
import controller from './motorrad.controller';
import motorradService from './motorrad.service';
var moduleName = 'motorrad';
require('./motorrad.css');


angular.module(moduleName, [])
  .component('motorrad', {controller: controller, templateUrl: 'app/motorrad/motorrad.html'})
  .service('motorradService', motorradService);

export default moduleName;
