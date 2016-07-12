describe('BookListController', function(){

    //Load the module that contain the book list component for each test
    beforeEach(module('bookStoreApp'));

    //Test the controller
    describe('bookList', function(){
        it('should create a book model with 3 books', inject(function($componentController){
            var ctrl = $componentController('bookList');
            expect(ctrl.books.length).toBe(3);
        }));
    });

});