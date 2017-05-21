/**
 * Created by kevinkreuzer on 16.05.17.
 */
import authService from '../security/auth.service'

let moduleName = 'securityModule'
angular.module(moduleName, [])
    .service('authService', authService)
export default moduleName
