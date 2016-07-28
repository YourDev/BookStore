angular.module('wishList').component('wishList', {
    templateUrl: 'wishList/wishList.template.html',
    controller: ['$scope', function wishListController($scope){
        if($scope.$root.wishlist != undefined) $scope.ngIfFlag = true;

        $scope.deleteBook = function(id){
            var index = $scope.$root.wishlist
                .indexOf($scope.$root.wishlist.find(function(book){return id === book.id}));
            $scope.$root.wishlist.splice(index, 1);
        };
    }
    ]
});