/**
 * Created by kevinkreuzer on 14.05.17.
 */
let moduleName = 'login'

import basicAuthController from './basicAuth-dialog.controller'
import basicAuthStyles from './basicAuth-dialog.css'

angular.module(moduleName, [])
    .component('basicAuth', {
        controller: basicAuthController,
        templateUrl: 'components/login/basicAuth-dialog.html'
    })

export default moduleName
