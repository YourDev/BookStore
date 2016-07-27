angular.module('bookStoreApp')
    .factory('dataService', ['$http', '$q', function($http, $q){
        return {
            getBooks: function(){
                var deffered = $q.defer();
                $http.get('books/books.json').success(function(data){
                    deffered.resolve(data);
                });

                return deffered.promise;
            },
            getBook: function(bookId){
                var deffered = $q.defer();
                $http.get('books/' + bookId + '.json').success(function(data){
                   deffered.resolve(data);
                });
                return deffered.promise;
            },
            getCategories: function(){
                var deffered = $q.defer();
                $http.get('categories-list/categories.json').success(function(data){
                    deffered.resolve(data);
                });
                return deffered.promise;
            }
        }
    }]);