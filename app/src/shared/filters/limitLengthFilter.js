angular.module('WPapp')
.filter('limitLength', function(){
    return function(val,len){
       // console.log( len);
        
        return val.slice(0,len.len);
    }
});