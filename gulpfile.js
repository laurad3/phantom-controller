var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var buffer = require('vinyl-buffer');

var jsFOLDER = 'src/js/';
var jsFILES = ['main.js', 'translations.js'];

gulp.task('default', ['sass', 'js', 'watch']);

gulp.task('sass', function () {
	return gulp.src('src/scss/**/*.scss')
	.pipe(sass({
		outputStyle: 'compressed',
		includePaths: ['node_modules/breakpoint-sass/stylesheets']
	}).on('error', sass.logError))
	.pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(gulp.dest('./frontend/css'));
});

gulp.task('watch', function () {
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('images', function () {
	return gulp.src(['src/images/**/*.jpg', 'src/images/**/*.mp4'])
	.pipe(gulp.dest('./frontend/images'));
});

gulp.task('js', function () {
	jsFILES.map(function (entry) {
		return browserify({
			entries: [jsFOLDER + entry],
			debug: true,
		})
		.bundle()
		.on('error', function (err) {
			console.log(err.stack);
		})
		.pipe(source(entry))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./frontend/js'))
	});
});