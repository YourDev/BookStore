angular.module('bookDetail').component('bookDetail', {
    templateUrl: 'book-detail/book-detail.template.html',
    controller: ['$routeParams', '$http', function bookDetailController($routeParams, $http) {
        var self = this;
        $http.get('books/' + $routeParams.bookId + '.json').then(function (response) {
            self.book = response.data;
        });
    }
    ]
});