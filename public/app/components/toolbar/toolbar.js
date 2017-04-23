/**
 * Created by kevinkreuzer on 16.03.17.
 */
import toolbarController from './toolbar.controller'
import settingsService from './settings/settings.service'
import settingsStyle from './settings/settings.css';
import toolbarStyles from './toolbar.css'

let moduleName = 'toolbar'

angular.module(moduleName, [])
    .component('apiToolbar', {
        controller: toolbarController,
        templateUrl: 'components/toolbar/toolbar.html'
    })
    .service('settingsService', settingsService)
export default moduleName
