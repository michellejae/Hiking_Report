
export default class trailService {
  constructor($http) {
    this.$http = $http
  }

  
  getTrailShit () {
    return 
    this.$http.get(`/hikeNow/fake`)
    .then(data => {
      console.log(data)
    })
  }
}