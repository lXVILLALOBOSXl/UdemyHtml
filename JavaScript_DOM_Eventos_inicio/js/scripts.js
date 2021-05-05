// querySelector funciona para manipular objetos dell archivo html, retorna 0 o 1 elemento
const heading = document.querySelector('.header__texto h2'); //Con document hacemos referencia a todo el documento html, en los parametros enviamos la clase y tipo del elemento que queremos seleccionar
heading.textContent = 'Nuevo heading'; //Text content es una propiedad de los h2
console.log(heading);


//queySelectorAll retorna todos los elementos que concuerden con el selector
const enlaces = document.querySelectorAll('.navegacion a'); //El . sirve para buscar por clase
console.log(enlaces);
enlaces[0].textContent = 'Nuevo Texto para Enlace'; //Modifica el contenido de texto del elemento
enlaces[0].classList.add('nueva-clase'); //Agrega clase al elemento html
console.log(enlaces[0].className);
enlaces[0].classList.remove('nueva-clase'); //Elimina clase del elemento html
console.log(enlaces[0].className);

// getElementById retorna 0 o 1 elemento que fue buscado por su id
const heading2 = document.getElementById('heading'); //No es necesario poner un . o un # ya que estamos diceindo que vamos a buscar mediante id
console.log(heading2);

//Generar codigo html a partir de js

//Generar un nuevo enlace
const enlace = document.createElement('A'); //Crea un elemento al documento html donde los argumentos llevan el tipo de elemento y se recomienda escribirlo en mayuscula
//Agregar el href
enlace.href = 'nuevo-enlace.html'; //Se agrega una propiedad
//Agregar el texto
enlace.textContent= "Tienda Virtual"; 
//Agregar la clase 
enlace.classList.add("navegacion__enlace");
console.log(enlace);
//agregarlo al documento
const navegacion = document.querySelector('.navegacion'); //Seleccionamos en que parte qieremos agregar el nuevo elemnto
navegacion.appendChild(enlace); //Agregamos el elemnto en la seccion que nosotros hayamos escogido

// Eventos

console.log(1);

window.addEventListener('load', function(){ //window es una clase superior a document, abarca mas, con addEventListener creamos un evento, dentro de los argumentos decimos que load espera a que el js y los archivos HTML esten listos
    console.log(2);
});

window.onload = function(){
    console.log(3)
}

document.addEventListener('DOMContentLoaded', function(){ //DOMContentLoaded solo espera a que el documento html este listo
    console.log(4);
});

console.log(5);

const scrolling = function(){
    console.log('scrolling...');
}
window.onscroll = scrolling(); //evento scrolling

// Click vs Sumbit. sum=bmit se recomienda para formularios mientras que click se recomienda para botones

//Seleccionar elementos y asocioarles un evento
// const btnEnviar = document.querySelector('.boton--primario'); //seleccionamos un elemento
// btnEnviar.addEventListener('click', evento => { //asociamos el evento al elemeno
//     console.log(evento);
//     evento.preventDefault(); //detiene la accion que tiene por defecto, en este caso recargar la pagina

//     //Validar un formulario

//     console.log('enviando formulario');
// });

// Eventos de Inputs y TextArea

const datos = { //Creamos un objeto para guardar la informacion de los campos del formulario
    nombre: '', //campos dentro del formulario
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre'); //asociamos el elemnto del html a una variable
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');


nombre.addEventListener('input', asociarObjeto); //agregamod un evento tipo input que retorna un evento cada vez que exista un cambio en el campo
email.addEventListener('input', asociarObjeto);
mensaje.addEventListener('input', asociarObjeto);

//Evento de Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
    //validar el formulario
    const { nombre, email, mensaje } = datos; //pasamos los campos del objeto en este contexto

    // if (nombre === ' ' || email === '' || mensaje === '') { //Si alguno de los campos esta vacio
    //     mostrarError('Todos los campos son obligatorios'); //Mostramos al usuario que existe un error
    //     return; //No continuamos con el codigo
    // }
        
    // //enviar el formulario
    // mostrarEnviado('Formulario Enviado con Exito!'); //Mostramos al usuario que existe un error

    if (nombre === ' ' || email === '' || mensaje === '') { //Si alguno de los campos esta vacio
        mostrarAlerta('Todos los campos son obligatorios', true); //Mostramos al usuario que existe un error
        return; //No continuamos con el codigo
    }
        
    //enviar el formulario
    mostrarAlerta('Formulario Enviado con Exito!'); //Mostramos al usuario que existe un error
    
})

function asociarObjeto(e){ //recibimos el evento
    datos[e.target.id] = e.target.value; //en el objeto arreglo en propiedad del id del elemento que mande a llamar el evento agregamos el valor del evento
    console.log(datos);
}


//Con refactoring
function mostrarAlerta(mensaje, error = null){
    const alerta = ocument.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

//Sin refactoring
// //Muestra un error en la pantalla
// function mostrarError(mensaje){ //Recibimos el mensaje de rror
//     const error = document.createElement('P'); //Creamos un parrafo en el html para ostrarlo al usuario
//     error.textContent = mensaje; //MOstramos el mensaje en el parrafo
//     error.classList.add('error'); //Agregamops una clase al parrafo
//     formulario.appendChild(error); //mostramos el parrafo en el html dentro del elemento formulario
//     //Desaparecer el error despues de 5 segundos
//     setTimeout(() => {
//         error.remove(); //asi se elimina un elemento del documento html
//     }, 5000);
// }

// //Muestra un error en la pantalla
// function mostrarEnviado(mensaje){ //Recibimos el mensaje de rror
//     const enviado = document.createElement('P'); //Creamos un parrafo en el html para ostrarlo al usuario
//     enviado.textContent = mensaje; //MOstramos el mensaje en el parrafo
//     enviado.classList.add('correcto'); //Agregamops una clase al parrafo
//     formulario.appendChild(enviado); //mostramos el parrafo en el html dentro del elemento formulario
//     //Desaparecer el error despues de 5 segundos
//     setTimeout(() => {
//         enviado.remove(); //asi se elimina un elemento del documento html
//     }, 5000);
// }
