angular.module('bookDetail').controller('bookDetailController', function bookDetailController($scope, $routeParams, dataService) {
    if($scope.$root.wishlist === undefined) $scope.$root.wishlist = [];

    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    };

    $scope.checkWishlist = function(){
        for(var i=0;i<$scope.$root.wishlist.length;i++){
            if($scope.$root.wishlist[i].id === $scope.book.id) {
                $scope.ngIfFlag = false;
                return;
            }
        }
        $scope.ngIfFlag = true;
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