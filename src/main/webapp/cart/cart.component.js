angular.module('cart').component('cart', {
   templateUrl: 'cart/cart.template.html',
   controller: ['$scope', 'cartService', function cartController($scope, cartService){
      $scope.books = cartService.getBooks();
      $scope.totalPrice = cartService.getTotalPrice();
      $scope.ngIfFlag = $scope.books.length != 0;

      $scope.deleteBook = function(id){
         cartService.deleteBook(id);
         $scope.ngIfFlag = $scope.books.length != 0;
      };
   }
   ]
});