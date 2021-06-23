//Notificacion Api

//document.querySelector("#id") //Selecciona elementos del html

const boton = document.querySelector('#boton'); //Seleccionamos el elemnto boton y lo guardamos en una variable

boton.addEventListener('click', () => { //Agregamos un evento al elemento boton, el primer parametro es el botn, y lo segundo es lo que se va a realizar cuando el evento pase
    Notification.requestPermission() //Notificacion es promise nativa que se encarga de solicitar un permiso
        .then(resultado => console.log(`El resultado es ${resultado}`) ) //Mostramos el estado del permiso
})



if(Notification.permission == 'granted') { //Si el estado de la notificaion fue autorizada
    new Notification('Esta es una notificación', { //Mandasmos una notificacion
        icon: 'img/ccj.png', //Con la imagen como icono
        body: 'Código con Juan, los mejores tutoriales' //y el cuerpo de la notificacio
    })
}