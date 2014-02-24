(function(){
  angular.module('ly.law-easy-read', []).directive('lawEasyRead', function(){
    return {
      restrict: 'A',
      link: function(scope, elem){
        console.log(elem.text());
        LER.parse(elem[0]);
      }
    };
  }).directive('togglableLawEasyRead', function(){
    return {
      transclude: true,
      template: '<span ng-transclude ng-hide="enabled"></span><span ng-transclude ng-show="enabled" law-easy-read></span>',
      restrict: 'A',
      scope: true,
      link: function(scope, elem, attrs){
        scope.$on('LER:toggle', function(e, v){
          return scope.enabled = v === undefined
            ? !scope.enabled
            : !!v;
        });
        scope.$watch(attrs.togglableLawEasyRead, function(it){
          scope.enabled = it;
        });
      }
    };
  });
}).call(this);
