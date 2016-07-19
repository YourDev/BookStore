angular.module('bookStoreApp').config([
        '$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.when('/books', {
                template: '<book-list></book-list>'
            }).when('/books/:bookId', {
                template: '<book-detail></book-detail>'
            }).otherwise('/books');
        }
    ])

    .directive("footer", function () {
        return {
            restrict: "A",
            replace: true,
            templateUrl: "footer/footer.html"
        }
    })

    .directive("header", function () {
        return {
            restrict: "A",
            replace: true,
            templateUrl: "header/header.html"
        }
    });