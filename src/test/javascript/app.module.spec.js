describe('BookListController', function(){
   beforeEach(module('bookStoreApp'));

    it('should create a book model with 3 books', inject(function($controller){
        var scope = {};
        var ctrl = $controller('BookListController', {$scope: scope});
        expect(scope.books.length).toBe(3);
    }));

});