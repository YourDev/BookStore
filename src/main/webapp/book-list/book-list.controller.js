angular.module('bookList')
    .controller('bookListController', function bookListController($http, $scope, booksInfo){
        if(typeof $scope.$root.books === 'undefined')
            booksInfo.get().then(function (response) {
                $scope.$root.books = response.data;
            });
    });
