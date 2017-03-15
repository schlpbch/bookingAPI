/**
 * Created by kevinkreuzer on 15.03.17.
 */
var controller = require('./tester.controller');
require('./test.css');

module.exports = angular.module('test', [])
  .component('test', {controller: controller, templateUrl: 'app/tester/test.html'});
