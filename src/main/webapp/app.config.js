angular.module('bookStoreApp')
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when("/", {
                templateUrl : "templates/home.html"
            })
            .when('/books', {
                template: '<book-list></book-list>'
            })
            .when('/books/:bookId', {
                template: '<book-detail></book-detail>'
            })
            .otherwise({
                redirectTo: "/"
            });
    }]);