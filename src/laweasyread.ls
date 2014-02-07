angular.module 'app.directives' []
.directive \lawEasyRead <[$compile]> ++ ($compile) ->
  restrict: \A
  link: (scope, elem, attrs) ->
    scope.toggle = ->
      scope.$eval "enabled=#{not scope.enabled}"
    attrs.$observe \lawEasyRead ->
      scope.$eval "enabled=#it"
    (el = elem.clone!)
      .removeAttr \law-easy-read
      .removeAttr \ng-hide
      .attr \law-after-easy-read  true
      .attr \ng-show              \enabled
    elem.after $compile(el)(scope)
.directive \lawAfterEasyRead ->
  restrict: \A
  link: (scope, elem, attrs) ->
    LER.parse elem.0
