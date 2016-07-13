//Register the bookList component of the 'bookList' module
angular.module('bookList').component('bookList', {
    templateUrl: 'book-list/book-list.template.html',
    controller: ['$http', function BookListController($http) {
        var self = this;//can't refer to this in callback func, that why create separate variable
        $http.get('books/books.json').then(function (response) {
            self.books = response.data;
        });
    }
    ]
});