var gulp					= require('gulp');
var sass					= require('gulp-sass');
var autoprefixer	= require('gulp-autoprefixer');
var plumber				= require('gulp-plumber');
var sourcemaps		= require('gulp-sourcemaps');
var browserSync		= require('browser-sync').create();

gulp.task('browser-sync', function() {
	browserSync.init({
		server: {
			baseDir: 'htdocs/'
		}
	});
});

gulp.task("browser-reload", function() {
  browserSync.reload();
});

gulp.task('sass', function(){
	gulp.src('htdocs/common/sass/*.scss')
	.pipe(sourcemaps.init())
	.pipe(plumber())
	.pipe(sass())
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('../map'))
	.pipe(gulp.dest('htdocs/common/css'))
	.pipe(browserSync.stream());
});

gulp.task('watch', function(){
	gulp.watch('htdocs/common/sass/*.scss',['sass']);
	gulp.watch([
		'htdocs/**/*.html',
		'htdocs/common/js/*.js',
	],['browser-reload']);
});

gulp.task('default', ['browser-sync','watch']);

// Install npm module
var install = require("gulp-install");

gulp.task('install', function() {
  gulp.src(['./htdocs/package.json'])
    .pipe(gulp.dest('./dist'))
    .pipe(install());
});

gulp.task('styles', () => {
  return gulp.src('htdocs/common/css/*.css')
    .pipe(gulp.dest('dist/common/css'));
});

gulp.task('html', ['sass','styles'], () => {
  return gulp.src('htdocs/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('htdocs/common/img/**/*')
    .pipe(gulp.dest('dist/common/img'));
});

gulp.task('extras', () => {
  return gulp.src([
    'htdocs/*',
    'htdocs/*.*',
    '!htdocs/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('build', ['html', 'images','extras','install'], () => {
  return gulp.src('dist/**/*');
});
