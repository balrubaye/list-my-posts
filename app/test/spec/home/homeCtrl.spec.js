describe('Home Controller spec', function(){
    beforeEach( module('WPapp'));
    
    var scope, ctrl, postSrvs, srvs;
    
    beforeEach( inject( function($rootScope, $controller){
        scope= $rootScope.$new();
        ctrl=$controller('HomeCtrl', {$scope:scope});
        
    }));
    
    beforeEach( inject( function($injector){
        postSrvs= $injector.get('PostService');
        scope.srvs= new postSrvs('https://public-api.wordpress.com/rest/v1/sites/idcdistro.wordpress.com/posts/?callback=JSON_CALLBACK');
       console.log(scope.srvs);
    }));
    
    
    it('HomeCtrl should be defined', function(){
        expect(ctrl).toBeDefined();
    });
    
    it('PostsService should be defined', function(){
        expect(postSrvs).toBeDefined();
    });
    
   
   
   
});