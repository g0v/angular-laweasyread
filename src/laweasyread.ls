angular.module 'ly.law-easy-read' []
.directive \lawEasyRead <[$timeout]> ++ ($timeout) ->
  restrict: \A
  link: (scope, elem, attrs) !->
    scope.delay ?= attrs.ler-delay
    if not scope.delay then
      LER.parse elem.0
    else
      $timeout ->
        LER.parse elem.0
      , +scope.delay
.directive \togglableLawEasyRead ->
  transclude: true
  template: '<span ng-transclude ng-hide="enabled"></span><span ng-transclude ng-show="enabled" law-easy-read></span>'
  restrict: \A
  # use isolated scope and give up to co-op with ng-click
  scope:
    delay:   \@lerDelay
    enabled: \@lerEnabled
  link: (scope, elem, attrs) !->
    scope
      ..$watch attrs.ler-enabled, !->
        scope.enabled = it
      ..toggle = ->
        @enabled = if it is undefined then !@enabled else !!it
      ..$on \LER:toggle (e, v) -> scope.toggle v
