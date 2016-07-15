describe('bookDetail', function(){

    //Load the module that contain the book list component for each test
    beforeEach(module('bookDetail'));

    //Test the controller
    describe('bookDetailController', function(){
        var $httpBackend, bookDetailCtrl, scope, mockJSON;


        beforeEach(inject(function($controller, $rootScope, _$httpBackend_){
            $httpBackend = _$httpBackend_;
            scope = $rootScope.$new();
            mockJSON = {
                "name": "1984",
                "id": "1984",
                "description": "Outside, even through the shut window pane, the world looked cold. Down in the street little eddies of wind were whirling dust and torn paper into spirals, and though the sun was shining and the sky a harsh blue, there seemed to be no color in anything except the posters that were plastered everywhere.",
                "images": [
                    "img/books/1984.0.jpg",
                    "img/books/1984.1.jpg"
                ],
                "category": [
                    "Science Fiction",
                    "Classics"
                ],
                "price": "$8.26",
                "author": [
                    "George Orwell"
                ],
                "publisher": "Signet Classic",
                "cover": "Hardcover",
                "year": "2013",
                "isbn-10": "0451524934",
                "isbn-13": "978-0451524935",
                "language": "English",
                "pages": "328",
                "availableOnWarehouse": "999",
                "rating": "maybe"
            };



            $httpBackend.whenGET('books/1984.json').respond(200, mockJSON);

            bookDetailCtrl = $controller('bookDetailController',{
                $routeParams: {bookId: '1984'},
                $scope:scope
            });
        }));


        it('should create a book model with name "1984" fetched with "$http"', function(){
            expect(bookDetailCtrl.book).toBeUndefined();

            $httpBackend.flush();

            expect(bookDetailCtrl.book.name).toEqual('1984');
        });
    });

});