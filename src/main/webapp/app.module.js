angular.module('bookStoreApp', [])
    .controller('BookListController', function ($scope) {
        $scope.books = [
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
    })
;
