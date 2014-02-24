(function(){
  angular.module('ly.law-easy-read', []).directive('lawEasyRead', function(){
    return {
      restrict: 'A',
      link: function(scope, elem){
        LER.parse(elem[0]);
      }
    };
  }).directive('togglableLawEasyRead', function(){
    return {
      transclude: true,
      template: '<div ng-transclude ng-hide="enabled"></div><div ng-transclude ng-show="enabled" law-easy-read></div>',
      restrict: 'A',
      scope: true,
      link: function(scope, elem, attrs){
        scope.$on('LER:toggle', function(e, v){
          return scope.enabled = v === undefined
            ? !scope.enabled
            : !!v;
        });
        scope.$watch(attrs.enabled, function(it){
          scope.enabled = it;
        });
      }
    };
  });
}).call(this);
