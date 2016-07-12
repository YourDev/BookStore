//Register the bookList component of the 'bookList' module
angular.module('bookList').
    component('bookList', {
    templateUrl: 'book-list/book-list.template.html',
    controller: function BookListController(){
        this.books = [
            {
                name: 'War and Peace',
                snippet: 'Very big book.'
            }, {
                name: '1984',
                snippet: 'Very smart book'
            }, {
                name: 'Sherlock Holms',
                snippet: 'Just a classic detective.'
            }
        ];
    }
});