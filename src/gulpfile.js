var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('reaload', function(){
  browserSync.reload();
});

gulp.task('serve', function(){

  browserSync({
    server: 'src'
  });

  gulp.watch('src/*.html', ['reload']);

});

gulp.task('deafult', ['serve']);
