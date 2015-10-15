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