// Node modules
var fs = require('fs'), vm = require('vm'), merge = require('deeply'), chalk = require('chalk'), es = require('event-stream');

// Gulp and plugins
var gulp = require('gulp'), rjs = require('gulp-requirejs-bundler'), concat = require('gulp-concat'), clean = require('gulp-clean'),
    replace = require('gulp-replace'), uglify = require('gulp-uglify'), htmlreplace = require('gulp-html-replace');

// Config
var requireJsRuntimeConfig = vm.runInNewContext(fs.readFileSync('src/app/require.config.js') + '; require;');
    requireJsOptimizerConfig = merge(requireJsRuntimeConfig, {
        out: 'scripts.js',
        baseUrl: './src',
        name: 'app/startup',
        paths: {
            requireLib: '../node_modules/requirejs/require'
        },
        include: [
            'requireLib',
            'components/app/app',
            'components/nav-bar/nav-bar',
            'components/page-home/page-home',
            'components/page-ranking/page-ranking',
            'components/card/card',
            'text!components/loader/loader.html'
            //'text!components/page-about/page-about.html'
        ],
        insertRequire: ['app/startup'],
        bundles: {
            // If you want parts of the site to load on demand, remove them from the 'include' list
            // above, and group them into bundles here.
            // 'bundle-name': [ 'some/module', 'another/module' ],
            // 'another-bundle-name': [ 'yet-another-module' ]
        }
    });

// Discovers all AMD dependencies, concatenates together all required .js files, minifies them
gulp.task('js', function () {
    return rjs(requireJsOptimizerConfig)
        .pipe(uglify({ preserveComments: 'some' }))
        .pipe(gulp.dest('./dist/src/'));
});

    // Concatenates CSS files
gulp.task('css', function () {
        var appCss = gulp.src('src/css/*.css');
        var combinedCss = es.concat(appCss).pipe(concat('css.css'))
    return es.concat(combinedCss)
        .pipe(gulp.dest('./dist/src/'));
});

gulp.task('fonts', function () {
        var fonts = gulp.src('src/fonts/**/*')
    return es.concat(fonts)
        .pipe(gulp.dest('./dist/fonts/'));
});



// Copies index.html, replacing <script> and <link> tags to reference production URLs
gulp.task('html', function() {
    return gulp.src('./src/index.html')
        .pipe(htmlreplace({
            'css': 'css.css',
            'js': 'scripts.js'
        }))
        .pipe(gulp.dest('./dist/src/'));
});

// Removes all files from ./dist/
gulp.task('clean', function() {
    return gulp.src('./dist/**/*', { read: false })
        .pipe(clean());
});

gulp.task('default', ['html', 'js', 'css', 'fonts'], function(callback) {
    callback();
    console.log('\nPlaced optimized files in ' + chalk.magenta('dist/\n'));
});
