/**
 * Created by kevinkreuzer on 20.03.17.
 */

import bookingStore from './service/booking.store'
import conversationService from './service/conversation.service'
import tabService from './service/tab.service'
import loaderModule from './loader/loader'
import errorLogModule from './error-log/error-log'

let moduleName = 'commonModule'

angular.module(moduleName, [loaderModule, errorLogModule])
  .service('bookingStore', bookingStore)
  .service('conversationService', conversationService)
  .service('tabService', tabService)

export default moduleName
