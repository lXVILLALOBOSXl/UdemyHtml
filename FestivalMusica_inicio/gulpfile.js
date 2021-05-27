const { series, src, dest, watch, parallel } = require('gulp'); //Importar la dependencia, la busca y la trae a este archivo
//series funciona para ejecutar diversas funciones en un solo comando en orden, una vez que termina de ejecutar una sigue con la siguiente
//con llaves indica que el paquete tiene multiples funciones
const sass = require('gulp-sass'); //El paquete solo tiene una funcion
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

//Funcion que compila SASS
// function css( done ){ 
//     console.log('Compilando SASS...');

//     done();
// }

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}
function css( ){ 
    return src(paths.scss)
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(dest('./build/css'))
}

function minificarCss( ){ 
    return src(paths.scss)
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest('./build/css'))
}

function javascript(){
    return src(paths.js)
        .pipe( concat('bundle.js'))
        .pipe(dest('./build/js'))
}

function imagenes(){
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe( notify({message: 'Imagen Minificada'}) );
}

function versionWebp(){
    return src(paths.imagenes)
        .pipe(webp())
        .pipe( dest ('./build/img'))
        .pipe( notify({message: 'Version webP lista'}) );
}

function watchArchivo( ){ //Ejecuta una funcion cada vez que identifique un cambio en el archivo como argumento
   watch(paths.scss, css); //El * indica todos los archivos que tengan la extension siguiente del asterisco en la ruta especificada y el ** todos los archivos de la carpeta incluso carpetas
   watch(paths.js, javascript)
}

exports.css = css;
exports.minificarCss = minificarCss;
exports.imagenes = imagenes;
exports.watchArchivo = watchArchivo;

exports.default = series( css, javascript, imagenes, versionWebp, watchArchivo);