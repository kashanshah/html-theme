import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import fileinclude from 'gulp-file-include';
import { deleteAsync } from 'del';
import gulpImagemin from 'gulp-imagemin';
import imageminPngquant from 'imagemin-pngquant';
import mapSources from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import prettier from 'gulp-prettier';

// Initialize gulp-sass with dart-sass
const sass = gulpSass(dartSass);
const { src, dest, series, parallel, watch, task } = gulp;

// Clean the 'dist' directory
function clean() {
  return deleteAsync('dist');
}

// Compile SCSS/SASS files, minify and generate sourcemaps
function styles() {
  const cssFiles = [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/bootstrap/dist/css/bootstrap.rtl.css',
    './node_modules/swiper/swiper-bundle.css',
    './node_modules/@fancyapps/fancybox/dist/jquery.fancybox.css',
    './node_modules/@fancyapps/ui/dist/carousel/carousel.css',
    './node_modules/aos/dist/aos.css',
    'src/assets/styles/**/*.scss'
  ];
  gulp.src(cssFiles)
    .pipe(mapSources.init())
    .pipe(sass({
      errLogToConsole: true, // outputStyle: 'compressed',
      // outputStyle: 'nested',
    }).on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('styles.css'))
    .pipe(mapSources.write('./'))
    .pipe(dest('dist/assets/css/'));
  return gulp.src(cssFiles)
    .pipe(mapSources.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/assets/css'))
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(mapSources.write('./'))
    .pipe(gulp.dest('dist/assets/css'));
}

// Prettify, minify JavaScript files and generate sourcemaps
function scripts() {
  const jsFiles = [
    './node_modules/jquery/dist/jquery.js',
    './node_modules/bootstrap/dist/js/bootstrap.bundle.js',
    './node_modules/swiper/swiper-bundle.js',
    './node_modules/particles.js/particles.js',
    './node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
    './node_modules/@fancyapps/ui/dist/carousel/carousel.umd.js',
    // './node_modules/slick-carousel/slick/slick.js',
    // './node_modules/jquery-inview/jquery.inview.js',
    './node_modules/gsap/dist/all.js',
    './node_modules/aos/dist/aos.js',
    'src/assets/js/**/*.js'
  ];
  src(jsFiles)
      .pipe(uglify())
      .pipe(concat('scripts.js'))
      .pipe(dest('dist/assets/js'));

  return src(jsFiles)
    .pipe(prettier({ singleQuote: true, semi: true }))
    .pipe(dest('dist/assets/js'))
    .pipe(mapSources.init())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(mapSources.write('./'))
    .pipe(dest('dist/assets/js'));
}

// Minify images
function imgMinify() {
  return src('src/**/*.{png,svg,jpg,jpeg,webp,gif}')
    .pipe(gulpImagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }],
      use: [imageminPngquant({ quality: '50-100', speed: 5 })],
    }))
    .pipe(dest('dist/'));
}

// Include HTML partials and copy to 'dist'
function publishHTML() {
  return src(['./src/**/*.html', './src/**/*.txt', './src/**/*.json'])
    .pipe(fileinclude({ prefix: '@@', basepath: '@file' }))
    .pipe(dest('dist/'));
}

// Copy fonts to 'dist'
function publishFonts() {
  return src(['./src/assets/fonts*/**/*']).pipe(dest('dist/assets'));
}

// Watch for changes and re-run tasks
function watching() {
  watch(['./src/*.html', './src/**/*.html', './src/**/*.json'], series(publishHTML));
  watch('./src/assets/styles/{,/**/*}*.{scss,sass}', series(styles));
  watch('./src/assets/js/**/*.js', series(scripts));
  watch('./src/assets/images/{,/**/*}*.{png,svg,jpg,jpeg,webp}', series(imgMinify));
  watch('./src/assets/fonts/**/*', series(publishFonts));
}

// Define default task
task('default', series(clean, parallel(publishHTML, styles, scripts, imgMinify, publishFonts), watching));

// Define watch task
task('watch', series(watching));

// Define build task
task('build', series(clean, parallel(publishHTML, styles, scripts, imgMinify, publishFonts)));
