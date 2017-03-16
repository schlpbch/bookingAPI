/**
 * Created by kevinkreuzer on 15.03.17.
 */
var controller = require('./motorrad.controller');
var moduleName = 'motorrad';
require('./motorrad.css');


angular.module(moduleName, [])
  .component('motorrad', {controller: controller, templateUrl: 'app/motorrad/motorrad.html'});

module.exports = moduleName;
