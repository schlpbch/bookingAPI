/**
 * Created by kevinkreuzer on 08.04.17.
 */
export default class ToolbarController {
  constructor ($mdSidenav) {
    this.$mdSidenav = $mdSidenav
  }

  toggleSidenav (menuId) {
    this.$mdSidenav(menuId).toggle()
  }
}
