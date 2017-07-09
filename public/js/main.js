var app = angular.module('shortUrlApp', []);

app.controller('shortAppCtrl', function($scope){
    $scope.urlToShorten = "hello world";
});