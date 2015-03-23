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

quickPick.controller('LotteriesController', function ($scope, $http) {
    $http.get('data/lotteries.json')
        .success(function(data, status, headers, config) {
            $scope.lotteries = data;
        })
        .error(function(data, status, headers, config) {
            Console.log(data);
        });
});