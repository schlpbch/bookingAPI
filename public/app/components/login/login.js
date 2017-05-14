/**
 * Created by kevinkreuzer on 14.05.17.
 */
let moduleName = 'login'

import loginController from './login.controller'
import loginStyles from './login.css'

angular.module(moduleName, [])
    .component('login', {
        controller: loginController,
        templateUrl: 'components/login/login.html'
    })

export default moduleName
