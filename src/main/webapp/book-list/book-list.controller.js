angular.module('bookList')
    .controller('bookListController', function bookListController($scope, dataService){
        if(typeof $scope.$root.books === 'undefined')
            dataService.getBooks().then(function(books){
                $scope.$root.books = books;
            });
    });