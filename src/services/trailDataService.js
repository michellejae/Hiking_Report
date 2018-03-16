
// export default class trailService {
//   constructor($http) {
//     this.$http = $http
//   }

  
//   getTrailShit () {
//     return 
//     this.$http.get(`/hikeNow/fake`)
//     .then(data => {
//       console.log(data)
//     })
//   }
// }

const trailService = ['$http', function ($http) {
  this.getTrailShit = function () {
    $http.get(`/hikeNow/fake`)
    .then(data => {
      console.log(data)
    })
  }
}]

export default trailService