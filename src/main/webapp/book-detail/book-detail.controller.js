angular.module('bookDetail').controller('bookDetailController', function bookDetailController($scope, $routeParams, dataService) {
    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    };

    dataService.getBook($routeParams.bookId).then(function(book){
        $scope.book = book;
        $scope.setImage($scope.book.images[0]);
    });
});