angular.module('bookStoreApp')
    .controller('sidebarController', function sidebarController($http, $scope, $location, booksInfo, categoriesInfo){
        $scope.nameFlag = true;
        $scope.priceFlag = true;
        $scope.authorFlag = true;
        $scope.categoryFlag = true;
        $scope.input = 'search...';
        $scope.inBookFlag = false;

        $scope.$root.searchByAuthor = function(author){
            $scope.nameFlag = false;
            $scope.priceFlag = false;
            $scope.authorFlag = true;
            $scope.categoryFlag = false;
            $scope.input = author;
            $scope.search(author);
        };

        $scope.$root.searchByPrice = function(price){
            $scope.nameFlag = false;
            $scope.priceFlag = true;
            $scope.authorFlag = false;
            $scope.categoryFlag = false;
            $scope.input = price;
            $scope.search(price);
        };

        $scope.$root.searchByCategory = function (category){
            $scope.nameFlag = false;
            $scope.priceFlag = false;
            $scope.authorFlag = false;
            $scope.categoryFlag = true;
            $scope.putDefaultToInput();
            $scope.search(category);
        };

        booksInfo.get().then(function(response){
            $scope.allBooks = response.data;
        });

        categoriesInfo.get().then (function(response){
             $scope.categories = response.data.categories;
        });

        $scope.putDefaultToInput = function (){
            if ($scope.input != 'search...') $scope.input = 'search...';
        };

        $scope.checkInputText = function(){
            if($scope.input === '') $scope.input = 'search...';
            else if($scope.input === 'search...') $scope.input = '';
        };

        $scope.search = function(text){
            $scope.books = [];
            if(text === '' || text === 'search...') {
                if($scope.inBookFlag) {
                    $location.path($scope.oldURL);
                }
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
                if($scope.priceFlag) {
                    if(text.charAt(0) === '$') text = text.substring(1,text.length);
                    if($scope.allBooks[i].price.match(new RegExp('^\\$'+text+'\\.*\\d*'))) $scope.books.push($scope.allBooks[i]);
                }
            }
            var uniqueBooks = $scope.books.filter(function(elem, pos) {
                return $scope.books.indexOf(elem) == pos;
            });
            if($location.url().match('\/books\/.*') || $location.url() === '/books-search'){
                $location.path('/books-search');
            }
            else if($location.url() != '#/books') $location.path('/books');
            $scope.$root.books = uniqueBooks;
        };

        $scope.searchInBook = function(){
            if($location.url().match('\/books\/.*')){
                $scope.inBookFlag = true;
                $scope.nameFlag = true;
                $scope.priceFlag = true;
                $scope.authorFlag = true;
                $scope.categoryFlag = true;
                $scope.oldURL = $location.url();
                if($scope.input != '') $scope.putDefaultToInput();
            }
            else if($location.url() === '/books'){
                $scope.inBookFlag = false;
                $scope.oldURL = undefined;
            }
        };

        $scope.searchInBook();

        $scope.$on('$locationChangeSuccess', function() {
            $scope.searchInBook();
        });
    });