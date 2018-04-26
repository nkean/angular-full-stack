console.log('client.js has been loaded');

var app = angular.module('FoodApp', []);

app.controller('FoodController', ['$http', function($http) {
    console.log('FoodController has been loaded');
    var self = this;

    self.newFood = {};
    self.allFoods = [];

    getAllTheFoods();

    self.addFood = function(){
        console.log(self.newFood);
        $http({
            method: 'POST',
            url: '/food',
            data: self.newFood
        })
        .then(function(response) {
            console.log(response);
            getAllTheFoods();
        })
        .catch(function(error) {
            console.log('error on /food POST: ', error);
        })
    };

    function getAllTheFoods() {
        $http({
            method: 'GET',
            url: '/food'
        })
        .then(function(response) {
            console.log(response.data);
            self.allFoods = response.data;
        })
        .catch(function(error) {
            console.log('error on /food GET: ', error);
        })
    }
}]);