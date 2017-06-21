/// <reference path = "angular.min.js />"

var myApp = angular.module("myModule", []);

myApp.controller('divController', function ($scope){
    $scope.message = 'Angular JS Tutorial';
    $scope.name = 'Sarah';
    $scope.favorite_icecream = 'mint-chocolate-chip';
    $scope.city = 'Redwood City';
});
