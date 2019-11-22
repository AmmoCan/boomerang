'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl',
            bindings: {
                skip: '<',
                limit: '<'
            }
        });
    }])

    .controller('View1Ctrl', ['$scope', '$http', View1Ctrl]);

        function View1Ctrl($scope, $http) {
            $scope.skip = 1;
            $scope.limit = 1;
            $scope.imagePath = 'assets/img/map.png';
            $scope.zwsid = 'X1-ZWz17iufrjvdhn_4bx42';

            $scope.lookupParams = function (skip, limit) {
                $scope.skip = skip;
                $scope.limit = limit;

                $http.get('https://wgrau8p1s0.execute-api.us-east-1.amazonaws.com/production/' + skip + '/' + limit + '/').
                    then(function (response) {
                        $scope.addresses = response.data.rows;
                        console.log($scope.addresses);
                    }, function (err) { console.log(err); });
            };

            $scope.details = function (primaryLine, city, state) {
                $http.get('http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=' + $scope.zwsid + '&address=' + primaryLine + '&citystatezip=' + city + '%2C' + state).
                    then(function (response) {
                        $scope.details = response.data;
                        console.log($scope.details);
                    }, function (err) { console.log(err); });
            };
        };
