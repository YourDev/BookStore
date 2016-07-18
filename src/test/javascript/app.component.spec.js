describe('bookStoreApp', function(){

    beforeEach(module('bookStoreApp'));

    describe('sidebarController', function(){
        var scope, sidebarCtrl, httpMock, mockJSON;

        beforeEach(inject(function($controller, $rootScope, $httpBackend){
            httpMock = $httpBackend;
            scope = $rootScope.$new();
            mockJSON = {
                "categories": [
                    "Professional",
                    "IT",
                    "Java",
                    "Science Fiction",
                    "Classics",
                    "Anatomy & Physiology",
                    "Poetry",
                    "Cookbooks, Food & Wine",
                    "Barbecuing & Grilling",
                    "Political Science",
                    "Detective",
                    "Action & Adventure",
                    "Literature & Fiction",
                    "History"
                ]
            };
            httpMock.expectGET('books/categories.json').respond(mockJSON);
            sidebarCtrl = $controller('sidebarController',{
                $scope: scope
            });
        }));


        it('should create a categories model with 14 categories fetched with "$http"', function(){
            expect(scope.categories).toBeUndefined();
            httpMock.flush();
            expect(scope.categories.length).toBe(14);
        });
    });

});