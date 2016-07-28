angular.module('wishList').component('wishList', {
    templateUrl: 'wishList/wishList.template.html',
    controller: ['$scope', function wishListController($scope){
        if($scope.$root.wishlist != undefined) $scope.ngIfFlag = true;
    }
    ]
});