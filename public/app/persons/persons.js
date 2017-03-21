/**
 * Created by kevinkreuzer on 21.03.17.
 */

let moduleName = 'personsModule';

angular.module(moduleName, [])
  .component('apiPersons', {
    templateUrl: 'app/persons/persons.html'
  });

export default moduleName;
