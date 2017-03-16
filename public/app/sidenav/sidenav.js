import controller from './sidenav.controller';
let moduleName = 'sidenav';

angular.module(moduleName, [])
  .component('apiSidenav', {
    controller,
    templateUrl: 'app/sidenav/sidenav.html'
  });

export default moduleName;
