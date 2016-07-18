describe('bookList', function(){

    //Load the module that contain the book list component for each test
    beforeEach(module('bookList'));

    //Test the controller
    describe('BookListController', function(){
        var $httpBackend, ctrl, scope;


        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        beforeEach(inject(function($componentController, $rootScope, _$httpBackend_){
            $httpBackend = _$httpBackend_;
            scope = $rootScope.$new();
            $httpBackend.expectGET('books/books.json')
                .respond([{name: 'Beginning Java EE 7'}, {name: '1984'}]);

            ctrl = $componentController('bookList', {
                $scope: scope
            });
        }));


        it('should create a book model with 2 books fetched with "$http"', function(){
            expect(scope.$root.books).toBeUndefined();

            $httpBackend.flush();
            expect(scope.$root.books).toEqual([{name: 'Beginning Java EE 7'}, {name: '1984'}]);

            expect(scope.$root.books.length).toBe(2);
        });
    });

});