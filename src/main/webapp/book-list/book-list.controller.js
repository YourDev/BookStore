angular.module('bookList')
    .controller('bookListController', function bookListController($http){
        var self = this;//can't refer to this in callback func, that why create separate variable
        $http.get('books/books.json').success(function (data) {
            self.books = data;
        });
    });