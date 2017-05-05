/**
 * Created by kevinkreuzer on 03.05.17.
 */
let self;
export default class ErrorInterceptor {

    constructor($injector) {
        self = this
        this.$injector = $injector
    }

    responseError(res){
        self.errorLogService = self.$injector.get('errorLogService')
        let errorCode = res.status
        let errorContent = res.data
        self.errorLogService.newError(errorCode, errorContent)
    }
}
