angular.module('WPapp',['ngRoute','infinite-scroll'])
.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'components/home/home.html',
        controller:'HomeCtrl'
    })
}])
.directive('headerWp', function()
         {
          return{
           templateUrl:'shared/templates/header.html',
              replace:true
            
         };
    })
.directive('footerWp', function(){
          return{
            templateUrl: 'shared/templates/footer.html',
              replace: true
         }
         });
         