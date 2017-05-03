/**
 * Created by kevinkreuzer on 03.05.17.
 */

export default class ErrorInterceptor {

    constructor(errorLogService) {
        this.errorLogService = errorLogService
    }

    responseError(res) {
        let errorCode = res.status
        let errorContent = res.data
        console.log('The error occured with the status' + errorCode + 'and the content' + errorContent)
    }
}
