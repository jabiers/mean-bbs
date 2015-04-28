/**
 * Created by daehyun on 15. 4. 19..
 */
var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope','$http', function($scope, $http) {

    var refresh = function() {
        $http.get('/itemlist').success(function(response) {
            console.log('i got the data i requested');
            $scope.contactlist = response;
        });
    }

    refresh();
    //
    //$scope.addContact = function () {
    //    console.log($scope.contact);
    //    $http.post('/contactlist', $scope.contact).success(function(response){
    //        console.log(response);
    //
    //        refresh();
    //    }) ;
    //};
    //
    //$scope.remove = function(id) {
    //    console.log(id);
    //    $http.delete('/contactlist/' + id).success(function(response) {
    //        console.log(response);
    //        refresh();
    //    });
    //};
    //
    //$scope.edit = function(id) {
    //    console.log(id);
    //    $http.get('/contactlist/' + id).success(function(response) {
    //        console.log(response);
    //        $scope.contact = response;
    //        refresh();
    //    });
    //};
    //
    //$scope.update = function(id) {
    //    $http.put('/contactlist/' + id, $scope.contact).success(function(response) {
    //        console.log(response);
    //        refresh();
    //    })
    //};
    //
    //$scope.clear = function() {
    //    $scope.contact = {};
    //    refresh();
    //
    //}
}]);
