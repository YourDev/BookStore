module.exports = function(config) {
    config.set({
        basePath: '../../..',
        frameworks: ['jasmine'],
        files: [
            'src/main/webapp/lib/angular/angular.min.js',
            'src/main/webapp/lib/angular-route/angular-route.min.js',
            'src/main/webapp/lib/angular-resource/angular-resource.min.js',
            'src/main/webapp/lib/angular-animate/angular-animate.min.js',
            'src/main/webapp/lib/angular-mocks/angular-mocks.js',
            'src/main/webapp/*.module.js',
            'src/main/webapp/*/*.module.js',
            'src/main/webapp/*.filter.js',
            'src/main/webapp/*/*.filter.js',
            'src/main/webapp/*.component.js',
            'src/main/webapp/*/*.component.js',
            'src/main/webapp/*.js',
            'src/main/webapp/*/*.js',
            'src/test/javascript/*.js'
        ],
        exclude: ['src/test/javascript/karma.conf*.js'],
        reporters: ['progress'],
        port: 9876,
        logLevel: config.LOG_INFO,
        browsers: ['Chrome', 'Firefox'],
        singleRun: false,
        autoWatch: true,
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-firefox-launcher'
        ]
    });
};