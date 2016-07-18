angular.module('bookDetail').component('bookDetail', {
    template: 'This is detail Page for <span> {{$ctrl.bookId}}</span>',
    controller: ['$routeParams', function bookDetailController($routeParams) {
        this.bookId = $routeParams.bookId;//take this from app.config.js
    }
    ]
});