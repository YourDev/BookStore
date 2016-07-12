angular.module('bookStoreApp').
    component('bookList', {
    template:
    '<ul>' +
    '<li ng-repeat="book in $ctrl.books">' +
        '<span>{{book.name}}</span>' +
        '<p>{{book.snippet}}</p>' +
    '</li>' +
    '</ul>',
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