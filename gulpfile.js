var gulp = require('gulp');
var watch = require('gulp-watch');
var shell = require('gulp-shell')

var sass = require('gulp-sass');


var jshint = require('gulp-jshint');
var jshintReporter = require('jshint-stylish');
var watch = require('gulp-watch');
var shell = require('gulp-shell')
  <% if (preprocessor === 'sass') { %>
 @@ -27,18 +25,6 @@ var paths = {
  <% } %>
  };


var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']

,
	'style': {
		all: './public/styles/**/*.scss',
		output: './public/styles/'
	}

};


gulp.task('watch:sass', function () {
	gulp.watch(paths.style.all, ['sass']);
});

gulp.task('sass', function(){
	gulp.src(paths.style.all)
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest(paths.style.output));
});


gulp.task('runKeystone', shell.task('node keystone.js'));
gulp.task('watch', [

  'watch:sass',

]);

gulp.task('default', ['watch', 'runKeystone']);




 // gulp lint
 gulp.task('lint', function(){
 	gulp.src(paths.src)
 		.pipe(jshint())
 		.pipe(jshint.reporter(jshintReporter));
 });

 // gulp watcher for lint
 gulp.task('watch:lint', function () {
 gulp.watch(paths.src, ['lint']);
 });

  <% if (preprocessor === 'sass') { %>
  gulp.task('watch:sass', function () {
  	gulp.watch(paths.style.all, ['sass']);
