angular.module('bookStoreApp')
    .factory('booksInfo', ['$http', function($http){
        return {
            get: function(){
                return $http.get('books/books.json');
            }
        }
    }])
    .factory('categoriesInfo', ['$http', function($http){
        return {
            get: function(){
                return $http.get('categories-list/categories.json');
            }
        }
    }]);