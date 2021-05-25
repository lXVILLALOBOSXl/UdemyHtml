const { series, src, dest, watch, parallel } = require('gulp'); //Importar la dependencia, la busca y la trae a este archivo
//series funciona para ejecutar diversas funciones en un solo comando en orden, una vez que termina de ejecutar una sigue con la siguiente
//con llaves indica que el paquete tiene multiples funciones
const sass = require('gulp-sass'); //El paquete solo tiene una funcion
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');

//Funcion que compila SASS
// function css( done ){ 
//     console.log('Compilando SASS...');

//     done();
// }
function css( ){ 
    return src('src/scss/app.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(dest('./build/css'))
}

function minificarCss( ){ 
    return src('src/scss/app.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(dest('./build/css'))
}

function imagenes(){
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe( notify({ message: 'Imagen Minificada'}) );
}

function watchArchivo( ){ //Ejecuta una funcion cada vez que identifique un cambio en el archivo como argumento
   watch('src/scss/**/*.scss', css); //El * indica todos los archivos que tengan la extension siguiente del asterisco en la ruta especificada y el ** todos los archivos de la carpeta incluso carpetas
}
exports.css = css;
exports.minificarCss = minificarCss;
exports.watchArchivo = watchArchivo;
exports.imagenes = imagenes;
exports.default = series( css, imagenes, watchArchivo);