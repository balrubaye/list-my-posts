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
         
angular.module('WPapp')
.filter('limitLength', function(){
    return function(val,len){
       // console.log( len);
        
        return val.slice(0,len.len);
    }
});
angular.module("WPapp")
.filter('unsafe', function($sce){
    
    return function(val){
        return $sce.trustAsHtml(val);
    }
});
        
angular.module('WPapp')
.controller('HomeCtrl', ['$scope', 'PostService','$http', function($scope, postService, $http){
    $scope.title='Home Page';
    
    
    
    $scope.defaultImg= 'assets/images/noDefaultImage6.gif';
    
    $scope.srvs= new postService('https://public-api.wordpress.com/rest/v1/sites/idcdistro.wordpress.com/posts/?callback=JSON_CALLBACK');
    
    console.log( $scope.srvs);
    
   
    
                                                                                                        
                                                                                                                          
}]);
angular.module('WPapp')
.factory('PostService', [ '$http', function($http){
    
    var PostList= function(url){
    
    var self=this;
    this.cur=[];
    this.count=0;
        
    this.initialize= function(){
        this.getAllPosts();
    };
        
        
    this.nextPage = function(){
        if(this.posts){
            
            if(this.count < this.posts.length){
                for(j= this.count ; j< this.count+3 && j<this.posts.length; j++)
                {
                    this.cur.push(this.posts[j]);
                }
        this.count+=3;
        
        console.log(this.cur);
        }}
    };
    
    
    this.getAllPosts= function()
    {
         $http.jsonp(url).then(  function(res){
            //console.log(data); 
           // console.log('sddddd');
            angular.extend(self, res.data);
             self.nextPage();
             
        });
       
    }
    
    this.initialize()
    }
    
    return PostList;
    
}]);