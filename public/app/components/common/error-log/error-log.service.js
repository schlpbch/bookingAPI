/**
 * Created by kevinkreuzer on 16.04.17.
 */
export default class ErrorLogService {

    constructor(){
        this.errors = [];

        //TODO kk - Just sample errors - remove as soon as error handling is implemented
        this.errors.push(this.createMockError(500, 'Sample Error 1'));
        this.errors.push(this.createMockError(404, 'Sample Error 2'));
        this.errors.push(this.createMockError(500, 'Sample Error 3'));
    }

    createMockError(code, message){
        return {code, message};
    }

    logError(errorMessage){
        this.errors.push(errorMessage);
    }
}
