angular.module('bookList')
    .controller('bookListController', function bookListController($http, $scope){
        $scope.$root.allBooks;
        $http.get('books/books.json').success(function (data) {
            $scope.$root.allBooks = data;
            $scope.$root.books = data;
            console.log($scope.$root.books);
        });
    });