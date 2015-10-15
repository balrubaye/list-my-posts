angular.module('WPapp')
.controller('HomeCtrl', ['$scope', 'PostService','$http', function($scope, postService, $http){
    $scope.title='Home Page';
    
    
    
    $scope.defaultImg= 'assets/images/noDefaultImage6.gif';
    
    $scope.srvs= new postService('https://public-api.wordpress.com/rest/v1/sites/idcdistro.wordpress.com/posts/?callback=JSON_CALLBACK');
    
    console.log( $scope.srvs);
    
   
    
                                                                                                        
                                                                                                                          
}]);