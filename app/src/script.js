angular.module('WPapp',['ngRoute'])
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
           templateUrl:'shared/templates/header.html'         
            
         };
    })
.directive('footerWp', function(){
          return{
            templateUrl: 'shared/templates/footer.html'
         }
         });
         