/**
 * Created by kevinkreuzer on 16.04.17.
 */
export default class ErrorLogController {

     constructor(errorLogService) {
         this.errorLogService = errorLogService
     }

     openErrorLog(){
         this.errorLogService.openButtomSheet()
     }

     hasErrors(){
         return this.errorLogService.hasErrors()
     }
}