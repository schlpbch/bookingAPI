/**
 * Created by kevinkreuzer on 16.03.17.
 */
import toolbarController from './toolbar.controller'

let moduleName = 'toolbar'

angular.module(moduleName, [])
    .component('apiToolbar', {
      controller: toolbarController,
      templateUrl: 'components/toolbar/toolbar.html'
    })
export default moduleName
