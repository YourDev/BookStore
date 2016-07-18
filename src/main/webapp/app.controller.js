angular.module('bookStoreApp')
    .controller('sidebarController', function sidebarController($http, $scope){
        $scope.nameFlag = true;
        $scope.categoryFlag = true;
        $scope.priceFlag = true;
        $scope.authorFlag = true;
        $scope.input = 'search...';

        $http.get('books/categories.json').success(function(data){
            $scope.categories = data.categories;
        });

        $scope.putToInput = function (link){
            var input = document.getElementById('search-input');
            $scope.input = link;
        };

        $scope.checkInputText = function(){
            if($scope.input === '') $scope.input = 'search...';
            else if($scope.input === 'search...') $scope.input = '';
            $scope.search($scope.input);
        };

        $scope.search = function(text){
            $scope.books = [];
            if(text === '' || text === 'search...') {
                $scope.$root.books = $scope.$root.allBooks;
                return;
            }
            $scope.$root.books = $scope.$root.allBooks;
            for(var i=0; i<$scope.$root.books.length; i++){
                if($scope.categoryFlag)
                    for(var j=0; j<$scope.$root.books[i].category.length; j++){
                        if($scope.$root.books[i].category[j].match(new RegExp('^'+text, 'i'))) $scope.books.push($scope.$root.books[i]);
                    }
                if($scope.authorFlag)
                    for(var j=0; j<$scope.$root.books[i].author.length; j++){
                        if($scope.$root.books[i].author[j].match(new RegExp(text, 'i'))) $scope.books.push($scope.$root.books[i]);
                    }
                if($scope.nameFlag && $scope.$root.books[i].name.match(new RegExp(text, 'i'))) $scope.books.push($scope.$root.books[i]);
                if($scope.priceFlag && text.charAt(0) === '$') {
                    text = text.substring(1,text.length);
                    if($scope.$root.books[i].price.match(new RegExp('^\\$'+text+'\\.'))) $scope.books.push($scope.$root.books[i]);
                }
            }
            var uniqueBooks = $scope.books.filter(function(elem, pos) {
                return $scope.books.indexOf(elem) == pos;
            });
            $scope.$root.books = uniqueBooks;
        };
    });