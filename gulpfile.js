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
