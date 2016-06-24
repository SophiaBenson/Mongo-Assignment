
console.log('bird is in scripts');
var myApp=angular.module('myApp',[]);
myApp.controller('Assignment', ['$scope', '$http', function ($scope, $http) {
  $scope.addStudent = function () {
    event.preventDefault();
    var AssignmentToSend ={
      number: $scope.numberIn,
      name: $scope.nameIn,
      score: $scope.scoreIn,
      date: $scope.dateIn
    };//end object to send
  $http({
    method:'POST',
    url:'/assignPost',
    data: AssignmentToSend
  });
  $scope.nameIn= "";
  $scope.numberIn="";
  $scope.scoreIn="";
  $scope.dateIn="";
};//end of clearing inputs
$scope.showStudent= function () {

$http({
  method:'GET',
  url:'/assignments',
}).then(function (response) {
  $scope.allTheAssignments=response.data;
  console.log($scope.allTheAssignments);
});
};
}]);//end of container
