angular.module('bookStoreApp')
    .directive('header', function (){
        return {
            templateUrl: "templates/header.template.html"};
    })
    .directive('footer', function (){
        return {
            templateUrl: "templates/footer.template.html"};
    });