angular.module('bookStoreApp')
    .factory('dataService', ['$http', '$q', function($http){
        return {
            getBooks: function(){
                return $http.get('books/books.json').then(function(books){
                    return books.data;
                });
            },

            getBook: function(bookId){
                return $http.get('books/' + bookId + '.json').then(function(book){
                    return book.data;
                });
            },

            getCategories: function(){
                return $http.get('categories-list/categories.json').then(function(categories){
                    return categories.data;
                });
            }
        }
    }]);