var quickPick = angular.module('quickPick', []);

quickPick.controller('StatesController', function ($scope, $http) {
    $http.get('data/states.json')
        .success(function(data, status, headers, config) {
            $scope.states = data;
        })
        .error(function(data, status, headers, config) {
            Console.log(data);
        });
});