
export default class ConversationService {

    constructor() {
        this._uuid = this._generateUUID()
    }

    getUuid() {
        return this._uuid;
    }

    resetUuid() {
        this._uuid = this._generateUUID();
        return this._uuid;
    }

    _generateUUID() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }
}
