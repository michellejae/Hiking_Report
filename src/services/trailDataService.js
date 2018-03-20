const trailService = ['$http', function ($http) {

this.getSingleTrail = function (name) {
  return $http.get(`/api/hikeNow/trail/${name}`)
  .then(singleTrail => {
    console.log(singleTrail.data)
  })
}

}]

export default trailService