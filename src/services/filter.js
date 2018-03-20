angular.module('myApp')
.filter('trailFilter', function() {
  return function(input, trailName) {
    let output;
    if(!input) {return []}
    output = input.filter(function(trailName) {
      console.log(trailName)
      
    });
    return output;
  }
})