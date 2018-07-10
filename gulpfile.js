var gulp = require('gulp'),
  gulp_sequence = require('gulp-sequence'),
  rename = require('gulp-rename'),
  fileinclude = require('gulp-file-include'),
  minifyjs = require('gulp-js-minify'),
  less = require('gulp-less');

var sourceRoot = 'src';
var buildRoot = 'build';

gulp.task('watch',
  gulp_sequence([
    'build',
    'watch_js',
    'watch_style',
    'watch_html'
  ])
);

gulp.task('build',
  gulp_sequence(([
    'compile_less',
    'include_zh_index',
    'include_en_index',
    'prepare_data'
  ]))
)

gulp.task('watch_js', function() {
  gulp.watch(
    [sourceRoot + '/js/*.js', sourceRoot + '/data/*'],
    [
      'prepare_data'
    ]
  )
});

gulp.task('include_zh_index', function() {
  gulp.src('src/zh/**.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(buildRoot + '/zh'))
})

gulp.task('include_en_index', function() {
  gulp.src('src/en/**.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(buildRoot + '/en'))
})

gulp.task('watch_html', function() {
  gulp.watch(
    [
      sourceRoot + '/zh/**.html',
      sourceRoot + '/includes/zh/**.html',
      sourceRoot + '/en/**.html',
      sourceRoot + '/includes/en/**.html'
    ],
    ['include_zh_index', 'include_en_index'])
})

gulp.task('minify_js', function() {
  gulp.src([sourceRoot + '/js/*.js'])
    .pipe(minifyjs())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(buildRoot + '/js'))
});

gulp.task('compile_less', function() {
  gulp.src(sourceRoot + '/style/**.less')
    .pipe(less())
    .pipe(gulp.dest(buildRoot + '/css/'))
});

gulp.task('watch_style', function() {
  gulp.watch(
    [sourceRoot + '/style/*.less'],
    ['compile_less']
  )
});

gulp.task('prepare_data', function() {
  gulp.src([
    sourceRoot + '/data/**',
    sourceRoot + '/js/**',
    sourceRoot + '/resource/**',
    sourceRoot + '/lib/**'],
    {base: sourceRoot}
    )
    .pipe(gulp.dest(buildRoot))
})