
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
  console.log('in here')
  this.getTrailShit = function () {
    console.log('even in here')
    $http.get(`api/hikeNow/fake`)
    .then(data => {
      console.log(data.data)
    })
  }
}]

export default trailService