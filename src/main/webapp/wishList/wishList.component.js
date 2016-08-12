angular.module('wishList').component('wishList', {
    templateUrl: 'wishList/wishList.template.html',
    controller: ['$scope', 'wishListService', function wishListController($scope, wishListService){
        $scope.books = wishListService.getBooks();
        $scope.totalPrice = wishListService.getTotalPrice();
        $scope.ngIfFlag = $scope.books.length !=0;

        $scope.deleteBook = function(id){
            wishListService.deleteBook(id);
            $scope.ngIfFlag = $scope.books.length != 0;
        };
    }
    ]
});