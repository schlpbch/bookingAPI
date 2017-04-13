/**
 * Created by kevinkreuzer on 13.04.17.
 */
import styles from './loader.css';

let loaderModuleName = 'loader';

angular.module(loaderModuleName, [])
    .component('apiLoader', {
        templateUrl: 'components/common/loader/loader.html'
    })

export default loaderModuleName;
