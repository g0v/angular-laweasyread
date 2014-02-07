(function(){
  angular.module('app.directives', []).directive('lawEasyRead', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        console.log(scope);
        return LER.parse(elem[0]);
      }
    };
  });
}).call(this);
