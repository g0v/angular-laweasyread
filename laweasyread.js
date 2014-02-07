(function(){
  angular.module('app.directives', []).directive('lawEasyRead', function(){
    return {
      restrict: 'A',
      link: function(scope, elem, attrs){
        return console.log(elem.text());
      }
    };
  });
}).call(this);
