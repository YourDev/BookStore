describe('booksCategory', function () {
    beforeEach(module('core'));

    it('Should filter array by category and find right items',
        inject(function (booksCategoryFilter) {
            var books = [
                {
                    name: 'Beginning Java EE 7',
                    "category": [
                        "Professional",
                        "IT"
                    ]
                },
                {
                    name: 'Code Complete',
                    "category": [
                        "Professional",
                        "IT"
                    ]
                },{
                    name: '1984',
                    "category": [
                        "Science Fiction",
                        "Classics"
                    ]
                }
            ];
            expect(booksCategoryFilter(books, '').length).toBe(3);
            expect(booksCategoryFilter(books, 'IT').length).toBe(2);
        })
    );
});