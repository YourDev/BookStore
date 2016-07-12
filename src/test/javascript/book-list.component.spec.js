describe('bookList', function(){

    //Load the module that contain the book list component for each test
    beforeEach(module('bookList'));

    //Test the controller
    describe('BookListController', function(){

        it('should create a book model with 3 books', inject(function($componentController){
            var ctrl = $componentController('bookList');

            expect(ctrl.books.length).toBe(3);
        }));
    });

});