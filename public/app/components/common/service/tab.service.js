/**
 * Created by kevinkreuzer on 20.03.17.
 */

export default class TabService{

  constructor($timeout){
    this.$timeout = $timeout;
    this._selectedTab = 0;
  }

  get selectedTab(){
    return this._selectedTab;
  }

  set selectedTab(selectedTab){
    this._selectedTab = selectedTab;
  }

  goToNextTab(){
    //Ensure everything else gets executed before
    this.$timeout(() => {
      this._selectedTab++;
    }, 0)
  }
}
