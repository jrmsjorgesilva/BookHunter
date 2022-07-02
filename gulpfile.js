const gulp = require("gulp");
const sass = require("gulp-sass");

// COMPILE SCSS INTO CSS

const style = () => {
  // where is my scss file
  return (
    gulp
      .src("src/styles/scss/**/*.scss")
      // pass the file thought sass compiler
      .pipe(sass().on("error", sass.logError))
      //where do i save the compiled css file
      .pipe(gulp.dest("src/styles/css"))
  );
};

exports.style = style;
