angular.module('bookDetail').controller('bookDetailController', function bookDetailController($scope, $routeParams, dataService) {
    if($scope.$root.wishlist === undefined) $scope.$root.wishlist = [];

    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    };

    $scope.checkWishlist = function(){
        $scope.ngIfFlag = $scope.$root.wishlist.find(function (book) {
                return $scope.book.id === book.id;
            }) === undefined;
    };

    $scope.addBookToWishList = function(){
        $scope.$root.wishlist.push($scope.book);
        $scope.checkWishlist();
    };

    dataService.getBook($routeParams.bookId).then(function(book){
        $scope.book = book;
        $scope.setImage($scope.book.images[0]);
        $scope.checkWishlist();
    });
});