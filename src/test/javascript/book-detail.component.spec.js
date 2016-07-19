describe('bookDetail', function () {

    //Load the module that contain the book detail component for each test
    beforeEach(module('bookDetail'));

    describe('bookDetailController', function () {
        //Test controller
        var $httpBackend, ctrl;

        // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
        // This allows us to inject a service and assign it to a variable with the same name
        // as the service while avoiding a name conflict.
        beforeEach(inject(function ($componentController, _$httpBackend_, $routeParams) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('books/xyz.json')
                .respond({name: 'book xyz'});
            $routeParams.bookId = 'xyz';

            ctrl = $componentController('bookDetail');
        }));

        it('should fetch the phone details', function() {
            expect(ctrl.book).toBeUndefined();

            $httpBackend.flush();
            expect(ctrl.book).toEqual({name: 'book xyz'});
        });

    });
});