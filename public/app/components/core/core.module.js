/**
 * Created by kevinkreuzer on 03.05.17.
 */
import errorInterceptor from './interceptors/error.interceptor';

let modulename = 'coremodule'

angular.module(modulename, [])
    .config(($httpProvider) => {
        $httpProvider.interceptors.push('errorInterceptor')
    })
    .service('errorInterceptor', errorInterceptor);

export default modulename;
