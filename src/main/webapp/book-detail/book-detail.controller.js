angular.module('bookDetail')
    .controller('bookDetailController', function bookDetailController($scope, $routeParams, dataService, cartService, wishListService) {
    if($scope.$root.wishlist === undefined) $scope.$root.wishlist = [];

    $scope.setImage = function(imageUrl){
        $scope.mainImageUrl = imageUrl;
    };

    $scope.checkFlags = function(){
        $scope.wishListFlag = wishListService.getBooks().find(function (book) {
                return $scope.book.id === book.id;
            }) === undefined;

        $scope.cartFlag = cartService.getBooks().find(function (book) {
                return $scope.book.id === book.id;
            }) === undefined;
    };

    $scope.addBookToWishList = function(){
        wishListService.addBook($scope.book);
        $scope.checkFlags();
    };

    $scope.addBookToCart = function(){
        cartService.addBook($scope.book);
        $scope.checkFlags();
    };

    dataService.getBook($routeParams.bookId).then(function(book){
        $scope.book = book;
        $scope.setImage($scope.book.images[0]);
        $scope.checkFlags();
    });
});