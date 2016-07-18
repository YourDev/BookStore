angular.module('bookList')
    .controller('bookListController', function bookListController($http, $scope){
        $http.get('books/books.json').success(function (data) {
            $scope.$root.allBooks = data;
            $scope.$root.books = data;
        });
    });