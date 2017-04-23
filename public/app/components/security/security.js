/**
 * Created by kevinkreuzer on 23.04.17.
 */
import authService from './auth.service'
let moduleName = 'security'

angular.module(moduleName, [])
    .service('authService', authService)

export default moduleName
