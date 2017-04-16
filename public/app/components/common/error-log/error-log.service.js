/**
 * Created by kevinkreuzer on 16.04.17.
 */
export default class ErrorLogService {

    constructor(){
        this.errors = [];

        //TODO kk - Just sample errors - remove after testing
        this.errors.push(this.createMockError(500, 'Internal server error'));
        this.errors.push(this.createMockError(404, 'Not found'));
        this.errors.push(this.createMockError(500, 'Internal server error'));
    }

    createMockError(code, message){
        return {code, message};
    }

    logError(errorMessage){
        this.errors.push(errorMessage);
    }
}
