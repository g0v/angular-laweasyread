angular.module 'app.directives' []
.directive \lawEasyRead ->
  restrict: \A
  link: (scope, elem, attrs) ->
    console.log scope
    LER.parse elem.0
