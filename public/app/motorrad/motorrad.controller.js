/**
 * Created by kevinkreuzer on 15.03.17.
 */

export default class MotorradController{

  constructor(motorradService){
    this.title = motorradService.getMotorradTitle();
  }
}
