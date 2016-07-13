angular.module('bookListModule')
    .controller('bookListController', function bookListController($http){
        var self = this;
        $http.get('assets/books/book-id.json').success(function (data) {

            $http.get('assets/books/book-id.json').success(function (data) {

            })

        })
    });