(function(){
  angular.module('app.directives', []).directive('lawEasyRead', ['$compile'].concat(function($compile){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        var el;
        scope.toggle = function(){
          return scope.$eval("enabled=" + !scope.enabled);
        };
        attrs.$observe('lawEasyRead', function(it){
          return scope.$eval("enabled=" + it);
        });
        (el = elem.clone()).removeAttr('law-easy-read').removeAttr('ng-hide').attr('law-after-easy-read', true).attr('ng-show', 'enabled');
        return elem.after($compile(el)(scope));
      }
    };
  })).directive('lawAfterEasyRead', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        return LER.parse(elem[0]);
      }
    };
  });
}).call(this);
