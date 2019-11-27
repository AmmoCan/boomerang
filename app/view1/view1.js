var View1Controller = function ($scope, $http) {
    var vm = this;

    vm.skip = 1;
    vm.limit = 1;
    vm.imagePath = 'assets/img/map.png';
    // Enter API key below
    vm.zwsid = 'API Key Goes Here';
    vm.clicked = false;

    vm.lookupParams = function (skip, limit) {
        vm.skip = skip;
        vm.limit = limit;

        $http.get('https://wgrau8p1s0.execute-api.us-east-1.amazonaws.com/production/' + vm.skip + '/' + vm.limit + '/')
            .then(function (response) {
                vm.addresses = response.data.rows;
                console.log(vm.addresses);
            })
            .catch(function (err) {
                console.log("Something went wrong!", err);
            });
    };

    vm.details = function (primaryLine, city, state, id) {
        vm.clickedId = id;
        var poundOut = primaryLine.substr(1);
        var address = poundOut.replace(/\s+/g, '+');
        var proxy = '//cors-anywhere.herokuapp.com';
        var url = 'http://www.zillow.com/webservice/GetDeepSearchResults.htm?zws-id=';

        $http.get(proxy + '/' + url + vm.zwsid + '&address=' + address + '&citystatezip=' + city + '%2C+' + state, {
            transformResponse: function (cnv) {
                var x2js = new X2JS();
                var json = x2js.xml_str2json(cnv);
                return json;
            }
        })
            .then(function (response) {
                vm.detail = response.data.searchresults.response.results.result[0];
                console.log(vm.detail);
            })
            .catch(function (err) {
                console.log("Something went wrong!", err);
            });
    };

}
View1 = {
    bindings: {
        skip: '<',
        limit: '<',
        detail: '<'
    },
    controllerAs: 'vm',
    controller: ['$scope', '$http', View1Controller],
    templateUrl: 'view1/view1.html',
};

angular.module('view1', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Controller',
        });
    }])
    .component('view1', View1);
