angular.module 'ly.law-easy-read' []
.directive \lawEasyRead ->
  restrict: \A
  link: (scope, elem) !->
    console.log elem.text!
    LER.parse elem.0
.directive \togglableLawEasyRead ->
  transclude: true
  template: '<span ng-transclude ng-hide="enabled"></span><span ng-transclude ng-show="enabled" law-easy-read></span>'
  restrict: \A
  scope: true
  link: (scope, elem, attrs) !->
    scope.$on \LER:toggle (e, v) ->
      scope.enabled = if v is undefined then not scope.enabled else !!v
    scope.$watch attrs.togglableLawEasyRead, !->
      scope.enabled = it
