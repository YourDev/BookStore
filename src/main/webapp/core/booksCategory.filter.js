angular.module('core').filter('booksCategory', function () {
    return function (books, category) {
        var filtered = [];
        if(category === '' || category === undefined) return books;
        for (var i = 0, len = books.length; i < len; i++) {
            var book = books[i];
            var categories = book.category;
            for(var k = 0; k < categories.length; k++){
                if(categories[k] === category) filtered.push(book);
            }
        }
        return filtered;
    }
});