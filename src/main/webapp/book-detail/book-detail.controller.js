angular.module('bookDetail')
    .controller('bookDetailController', function bookDetailController($http, $routeParams, $scope){

        self = this;

        $scope.changeImg = function (img){
            self.titleImage = img;
        };

        $http.get('books/'+$routeParams.bookId+'.json').success(function(data){
            self.book = data;
            self.titleImage = self.book.images[0];
        });
    });
