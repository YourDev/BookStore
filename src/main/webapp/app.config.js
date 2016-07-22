angular.module('bookStoreApp').config([
        '$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider
            .when('/books', {
                template: '<book-list></book-list>'
            })
            .when('/books-search', {
                template: '<book-list></book-list>'
            })
            .when('/books/:bookId', {
                template: '<book-detail></book-detail>'
            })
            .when('/about', {
                template: '<about-us></about-us>'
            })
            .when('/contacts', {
                template: '<contacts></contacts>'
            })
            .when('/wishList', {
                template: '<wish-list></wish-list>'
            })
            .when('/cart', {
                template: '<cart></cart>'
            })
            .otherwise('/books');
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