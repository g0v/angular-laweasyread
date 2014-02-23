angular.module 'app.directives' []
.directive \lawEasyRead ->
  restrict: \A
  link: (scope, elem) !-> LER.parse elem.0
.directive \togglableLawEasyRead ->
  transclude: true
  template: '<div ng-transclude ng-hide="enabled"></div><div ng-transclude ng-show="enabled" law-easy-read></div>'
  restrict: \A
  scope: true
  link: (scope, elem, attrs) !->
    scope.$on \LER:toggle (e, v) ->
      scope.enabled = if v is undefined then not scope.enabled else !!v
    scope.$watch attrs.enabled, !->
      scope.enabled = it
