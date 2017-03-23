import controller from './sidenav.controller';
let moduleName = 'sidenav';

angular.module(moduleName, [])
  .component('apiSidenav', {
    controller,
    templateUrl: 'components/sidenav/sidenav.html'
  });

export default moduleName;
