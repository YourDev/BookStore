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

    .config(function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyCDxt1ieQTrY8c4YMslke6EIseWOCFyLTs',
            //v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization',
            china: true
        });
    })

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