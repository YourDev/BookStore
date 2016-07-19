angular.module('bookStoreApp')
    .controller('sidebarController', function sidebarController($http, $scope, $window, booksInfo, categoriesInfo){
        $scope.nameFlag = true;
        $scope.categoryFlag = true;
        $scope.priceFlag = true;
        $scope.authorFlag = true;
        $scope.input = 'search...';

        booksInfo.get().then(function(response){
            $scope.allBooks = response.data;
        });

        categoriesInfo.get().then (function(response){
             $scope.categories = response.data.categories;
        });

        $scope.putToInput = function (link){
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
                $scope.$root.books = $scope.allBooks;
                return;
            }
            $scope.$root.books = $scope.allBooks;
            for(var i=0; i<$scope.allBooks.length; i++){
                if($scope.categoryFlag)
                    for(var j=0; j<$scope.allBooks[i].category.length; j++){
                        if($scope.allBooks[i].category[j].match(new RegExp('^'+text, 'i'))) $scope.books.push($scope.allBooks[i]);
                    }
                if($scope.authorFlag)
                    for(var j=0; j<$scope.allBooks[i].author.length; j++){
                        if($scope.allBooks[i].author[j].match(new RegExp(text, 'i'))) $scope.books.push($scope.allBooks[i]);
                    }
                if($scope.nameFlag && $scope.allBooks[i].name.match(new RegExp(text, 'i'))) $scope.books.push($scope.allBooks[i]);
                if($scope.priceFlag && text.charAt(0) === '$') {
                    text = text.substring(1,text.length);
                    if($scope.allBooks[i].price.match(new RegExp('^\\$'+text+'\\.'))) $scope.books.push($scope.allBooks[i]);
                }
            }
            var uniqueBooks = $scope.books.filter(function(elem, pos) {
                return $scope.books.indexOf(elem) == pos;
            });
            if($window.location != '#/books') $window.location = '#/books';
            $scope.$root.books = uniqueBooks;
        };
    });