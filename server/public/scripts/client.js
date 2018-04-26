console.log('client.js has been loaded');

var app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function($http) {
    console.log('FoodController has been loaded');
    var self = this;

    self.newFood = {};

    self.addFood = function(){
        console.log(self.newFood);
    };

    $http({
        method: 'GET',
        url: '/food'
    })
    .then(function(response) {
        console.log(response.data);
    })
    .catch(function(error) {
        console.log('error on /food GET: ', error);
    })
}]);