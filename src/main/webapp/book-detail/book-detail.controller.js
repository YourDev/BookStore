angular.module('bookDetail')
    .controller('bookDetailController', function($http, $routeParams){

        self = this;
        $http.get('books/'+$routeParams.bookId+'.json').success(function(data){
            self.book = data;
            console.log(data);
        })
    });
