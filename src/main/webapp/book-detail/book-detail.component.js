angular.module('bookDetail').component('bookDetail', {
    templateUrl: 'book-detail/book-detail.template.html',
    controller: ['$routeParams', '$http', function bookDetailController($routeParams, $http) {
        var self = this;

        self.setImage = function(imageUrl){
            self.mainImageUrl = imageUrl;
        };

        $http.get('books/' + $routeParams.bookId + '.json').then(function (response) {
            self.book = response.data;
            self.setImage(self.book.images[0]);
        });
    }
    ]
});