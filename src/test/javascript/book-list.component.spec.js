describe('bookList', function(){

    //Load the module that contain the book list component for each test
    beforeEach(module('bookList'));

    //Test the controller
    describe('BookListController', function(){
        var $httpBackend, ctrl;


        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        beforeEach(inject(function($componentController, _$httpBackend_){
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('books/books.json')
                .respond([{name: 'Beginning Java EE 7'}, {name: '1984'}]);

            ctrl = $componentController('bookList');
            ctrl.setQuery('Homer');
        }));


        it('should create a book model with 2 books fetched with "$http"', function(){
            expect(ctrl.books).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.books).toEqual([{name: 'Beginning Java EE 7'}, {name: '1984'}]);

            expect(ctrl.books.length).toBe(2);
        });

        it('should set default value of orderPop property', function(){
            expect(ctrl.orderProp).toBe('price');
        });

        it('Should set query for search property', function(){
           expect(ctrl.query).toBe('Homer');
        });
    });

});