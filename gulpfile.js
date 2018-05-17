var gulp = require('gulp'),
    gulp_sequence = require('gulp-sequence'),
    rename = require('gulp-rename'),
    fileinclude = require('gulp-file-include'),
    minifyjs = require('gulp-js-minify'),
    less = require('gulp-less');

var webRoot = "docs/";
var webRootEN = "docs/en/";

gulp.task('watch', gulp_sequence(['watch_html', 'watch_js', 'watch_css', 'watch_html_en','watch_css_en']));


gulp.task('watch_html', function () {
    gulp.watch(['includes/*.html', 'src/**/*.html'], ['include_index', 'include_speakers', 'include_workshop']);
})

gulp.task('watch_html_en', function () {
    gulp.watch(['src/en/includes/*.html', 'src/en/**/*.html' ,'src/en/*.html'], ['include_en_index', 'include_en_speakers', 'include_en_workshop']);
})

gulp.task('watch_js', function () {
    gulp.watch([webRoot + 'js/*.js', webRoot + 'js/speakers/*.js'], ['minify-js-index', 'minify-js-speakers']);
});

// gulp.task('watch_js_en', function () {
//     gulp.watch([webRootEN + 'js/*.js', webRootEN + 'js/speakers/*.js'], ['minify-js-index-en', 'minify-js-speakers-en']);
// });

gulp.task('watch_css', function () {
    gulp.watch(webRoot + 'css/*.less', ['compile-less']);
})

gulp.task('watch_css_en', function () {
    gulp.watch(webRootEN + 'css/*.less', ['compile-less-en']);
})


gulp.task('include_index', function () {
    gulp.src('src/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(webRoot));
});

gulp.task('include_en_index', function () {
    gulp.src('src/en/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(webRootEN));
});

gulp.task('include_speakers', function () {
    gulp.src('src/speakers/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(webRoot + 'speakers/'));
});

gulp.task('include_en_speakers', function () {
    gulp.src('src/en/speakers/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(webRootEN + 'speakers/'));
});

gulp.task('include_workshop', function () {
    gulp.src('src/workshop/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(webRoot + 'workshop/'));
});

gulp.task('include_en_workshop', function () {
    gulp.src('src/workshop/**.html')
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(webRootEN + 'workshop/'));
});

gulp.task('minify-js-index', function () {
    gulp.src([webRoot + 'js/*.js', '!' + webRoot + 'js/*.min.js'])
        .pipe(minifyjs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(webRoot + 'js/lib'));
});

// gulp.task('minify-js-index-en', function () {
//     gulp.src([webRootEN + 'js/*.js', '!' + webRootEN + 'js/*.min.js'])
//         .pipe(minifyjs())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest(webRootEN + 'js/lib'));
// });

gulp.task('minify-js-speakers', function () {
    gulp.src([webRoot + 'js/speakers/*.js', '!' + webRoot + 'js/speakers/*.min.js'])
        .pipe(minifyjs())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(webRoot + 'js/lib/'));
});

// gulp.task('minify-js-speakers-en', function () {
//     gulp.src([webRootEN + 'js/speakers/*.js', '!' + webRootEN + 'js/speakers/*.min.js'])
//         .pipe(minifyjs())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest(webRootEN + 'js/lib/'));
// });

gulp.task('compile-less', function () {
    gulp.src(webRoot + 'css/*.less')
        .pipe(less())
        .pipe(gulp.dest(webRoot + 'css/'))
})

gulp.task('compile-less-en', function () {
    gulp.src(webRootEN + 'css/*.less')
        .pipe(less())
        .pipe(gulp.dest(webRootEN + 'css/'))
})
