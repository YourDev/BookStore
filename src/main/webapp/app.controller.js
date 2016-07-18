angular.module('bookStoreApp')
    .controller('sidebarController', function sidebarController($http, $scope){
        self = this;
        self.input = "search...";
        $http.get('books/categories.json').success(function(data){
            self.categories = data.categories;
        });

        $scope.putToInput = function (link){
            var input = document.getElementById('search-input');
            self.input = link;
        };

        $scope.search = function(category){
            if(category === '') return;
            $scope.$root.books = $scope.$root.allBooks;
            var books = [];
            for(var i=0; i<$scope.$root.books.length; i++){
                for(var j=0; j<$scope.$root.books[i].category.length; j++){
                    if($scope.$root.books[i].category[j].match(new RegExp('^'+category, 'i'))) books.push($scope.$root.books[i]);
                }
            }
            var uniqueBooks = books.filter(function(elem, pos) {
                return books.indexOf(elem) == pos;
            });
            console.log(uniqueBooks);
            if(books.length != 0) $scope.$root.books = uniqueBooks;
        };

        $scope.checkInputText = function(){
            if(self.input === '') self.input = 'search...';
            else if(self.input === 'search...') self.input = '';
            $scope.search(self.input);
        };
    });