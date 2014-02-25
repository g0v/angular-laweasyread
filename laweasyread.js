(function(){
  angular.module('ly.law-easy-read', []).directive('lawEasyRead', ['$timeout'].concat(function($timeout){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        if (!(scope != null && scope.delay)) {
          LER.parse(elem[0]);
        } else {
          $timeout(function(){
            return LER.parse(elem[0]);
          }, +scope.delay);
        }
      }
    };
  })).directive('togglableLawEasyRead', function(){
    return {
      transclude: true,
      template: '<span ng-transclude ng-hide="enabled"></span><span ng-transclude ng-show="enabled" law-easy-read></span>',
      restrict: 'A',
      scope: {
        delay: '@lerDelay',
        enabled: '@lerEnabled'
      },
      link: function(scope, elem, attrs){
        var x$;
        x$ = scope;
        x$.$watch(attrs.lerEnabled, function(it){
          scope.enabled = it;
        });
        x$.toggle = function(it){
          return this.enabled = it === undefined
            ? !this.enabled
            : !!it;
        };
        x$.$on('LER:toggle', function(e, v){
          return scope.toggle(v);
        });
      }
    };
  });
}).call(this);
