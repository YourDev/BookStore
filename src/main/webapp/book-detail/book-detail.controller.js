angular.module('bookDetail')
    .controller('bookDetailController', function bookDetailController($http, $routeParams, $scope){
        $scope.changeImg = function (img){
            $scope.titleImage = img;
        };

        $http.get('books/'+$routeParams.bookId+'.json').success(function(data){
            $scope.book = data;
            $scope.titleImage = $scope.book.images[0];
        });
    });
