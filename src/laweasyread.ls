angular.module 'app.directives' []
.directive \lawEasyRead ->
  restrict: \A
  link: (scope, elem, attrs) ->
    console.log elem.text!
    #LER.parse elem.0
