angular.module('bookStoreApp')
    .factory('dataService', ['$http', function($http){
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
     }])

    .factory('cartService', [function(){
        var books = [];
        return {
            getBooks: function(){
                return books;
            },

            getTotalPrice: function(){
                var sum = 0;
                books.forEach(function(book){sum += book.price;})
                return sum;
            },

            addBook: function(book){
                books.push(book);
            },

            deleteBook: function(id){
                var lengthBefore = books.length;
                var index = books
                    .indexOf(books.find(function(book){return id === book.id}));
                books.splice(index, 1);
                var lengthAfter = books.length;
                if(lengthBefore === lengthAfter) return false;
                else return true;
            }
        }
    }])

    .factory('wishListService', [function(){
        var books = [];
        return {
            getBooks: function(){
                return books;
            },

            getTotalPrice: function(){
                var sum = 0;
                books.forEach(function(book){sum += book.price;});
                return sum;
            },

            addBook: function(book){
                books.push(book);
            },

            deleteBook: function(id){
                var lengthBefore = books.length;
                var index = books
                    .indexOf(books.find(function(book){return id === book.id}));
                books.splice(index, 1);
                var lengthAfter = books.length;
                if(lengthBefore === lengthAfter) return false;
                else return true;
            }
        }
    }]);