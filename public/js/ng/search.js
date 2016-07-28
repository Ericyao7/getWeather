angular.module('main',['ngRoute'])
            .config(['$routeProvider', function($routeProvider){
                $routeProvider
                .when('/',{templateUrl:"ngView/defaultSearch.html"})
                .when('/googleSearch',{templateUrl:"ngView/googleSearch.html"})
                .when('/innerSearch',{templateUrl:"ngView/innerSearch.html"})
                .otherwise({redirectTo:'/'});
            }]);