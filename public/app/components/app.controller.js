/**
 * Created by kevinkreuzer on 15.03.17.
 */

export default class AppController {
    constructor(tabService, bookingStore, authService) {
        this.tabService = tabService
        this.bookingStore = bookingStore
        this.authService = authService
    }
}
