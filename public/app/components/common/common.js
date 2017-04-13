/**
 * Created by kevinkreuzer on 20.03.17.
 */

import bookingStore from './service/booking.store'
import tabService from './service/tab.service'
import loaderModule from './loader/loader'

let moduleName = 'commonModule'

angular.module(moduleName, [loaderModule])
  .service('bookingStore', bookingStore)
  .service('tabService', tabService)

export default moduleName
