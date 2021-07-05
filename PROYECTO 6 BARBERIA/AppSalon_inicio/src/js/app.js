let pagina = 1;
const cita = {
    nombre: '',
    fecha: '',
    hora: '',
    servicios: []
}

document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp(){
    mostrarServicios();
    // Resalta el Div actual segun el tab al que se presiona
    mostrarSeccion();
    //Oculta o muestra una seccion segun el tab al que se presiona
    cambiarSeccion();
    //Paginacion siguiente y anterior
    paginaSiguiente();
    paginaAnterior();
    //  Comprueba la pagina actual para ocultar o mostrar la paginacion
    botonesPaginador();
    // Muestra el resumen de la cita ( o mensaje de error en caso de no pasar la validacion )
    mostrarResumen();
    //Almacena el nombre de la cita en el objeto
    nombreCita();
    //Almacena la fecha de la cita en el pbjeto
    fechaCita();
    // DEshabilita dias pasados
    deshabilitarFechaAnterior();
}

function mostrarSeccion(){
    //Eliminar mostrar-seccion de la seccion anterior
    const seccionAnterior  = document.querySelector('.mostrar-seccion');
    if(seccionAnterior){
        seccionAnterior.classList.remove('mostrar-seccion');
    }
    const seccionActual = document.querySelector(`#paso-${pagina}`);
    seccionActual.classList.add('mostrar-seccion');
    //Eliminar la clase de actual en el tab anterior
    const tabAnterior = document.querySelector('.tabs .actual');
    if(tabAnterior){
        tabAnterior.classList.remove('actual');
    }
    // Resalta el Tab actual
    const tab = document.querySelector(`[data-paso="${pagina}"]`);
    tab.classList.add('actual');
}

function cambiarSeccion(){
    const enlaces = document.querySelectorAll('.tabs button');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();
            pagina = parseInt(e.target.dataset.paso);
            //Llama la funcion de mostrar seccion
            mostrarSeccion();
            botonesPaginador();
        })
    })
}

async function mostrarServicios(){
    try {
        const resultado = await fetch('./servicios.json');
        const db = await resultado.json();
        const {servicios} = db;
        //Generar el HTML 
        servicios.forEach(servicio => {
            const{id, nombre, precio}  = servicio;
            //Dom Scripting
            //Generar Nombre de Servicio
            const nombreServicio = document.createElement("P");
            nombreServicio.textContent = nombre;
            nombreServicio.classList.add("nombre-servicio");
            //Generar precio de servicio
            const precioServicio = document.createElement("P");
            precioServicio.textContent = `$ ${precio}`;
            precioServicio.classList.add("precio-servicio");
            //Generar div contenedor de servicio
            const servicioDiv = document.createElement("DIV");
            servicioDiv.classList.add('servicio');
            servicioDiv.dataset.idServicio = id;
            //Selecciona un servicio para la cita
            servicioDiv.onclick = seleccionarServicio;
            //Inyectar precio y nomgbre al div de servicio.
            servicioDiv.appendChild(nombreServicio);
            servicioDiv.appendChild(precioServicio);
            //Inyectarlo en el HTML
            document.querySelector('#servicios').appendChild(servicioDiv);
        });
    } catch (error) {
        console.log(error);
    }
}

function seleccionarServicio(e){
    let elemento;
    //Forzar que el elemento al cual le damos click sea el DIV
    if(e.target.tagName === 'P'){
        elemento = e.target.parentElement;
    } else {
        elemento = e.target;
    }
    if (elemento.classList.contains('seleccionado')){
        elemento.classList.remove('seleccionado');
        const id = parseInt(elemento.dataset.idServicio);
        eliminarServcio(id);
    } else {
        elemento.classList.add('seleccionado');
        const servicioObj ={
            id: parseInt( elemento.dataset.idServicio ),
            nombre: elemento.firstElementChild.textContent,
            precio: elemento.firstElementChild.nextElementSibling.textContent
        }
        agregarServicio(servicioObj);
    }
}

function eliminarServcio(id){
    const {servicios} = cita;
    cita.servicios = servicios.filter( servicio => servicio.id !== id );
}

function agregarServicio(servicioObj){
    const {servicios} = cita;
    cita.servicios = [...servicios, servicioObj];

}

function paginaSiguiente(){
    const paginaSiguiente = document.querySelector('#siguiente');
    paginaSiguiente.addEventListener('click', () => {
        pagina++;
        botonesPaginador();
    });
}

function paginaAnterior(){
    const paginaAnterior = document.querySelector('#anterior');
    paginaAnterior.addEventListener('click', () => {
        pagina--;
        botonesPaginador();
    });
}

function botonesPaginador(){
    const paginaSiguiente = document.querySelector('#siguiente');
    const paginaAnterior = document.querySelector('#anterior');
    if(pagina === 1){
        paginaAnterior.classList.add('ocultar');
    }else if(pagina === 2){
        paginaAnterior.classList.remove('ocultar');
        paginaSiguiente.classList.remove('ocultar');
    }else if(pagina === 3){
        paginaSiguiente.classList.add('ocultar');
        paginaAnterior.classList.remove('ocultar');
    }
    mostrarSeccion(); // Cambia la seccion que se muestra por la de la pagina
}

function mostrarResumen(){
    //Destructuring
    const {nombre, fecha, hora, servicios} = cita;
    //Seleccionar el resumen 
    const resumenDiv = document.querySelector('.contenido-resumen');
    if(Object.values(cita).includes('')){
        const noServicios = document.createElement('P');
        noServicios.textContent = "Faltan datos de servicios, hora, fecha o nombre";
        noServicios.classList.add('invalidar-cita');
        //Agregar a resumen Div
        resumenDiv.appendChild(noServicios);
    }
}

function nombreCita(){
    const nombreInput = document.querySelector('#nombre');
    nombreInput.addEventListener('input', e => {
        const nombreTexto = e.target.value.trim();
        //Validacion de que nombreTexto debe tener algo 
        if(nombreTexto === '' || nombreTexto.length < 3){
            mostrarAlerta('Nombre no valido', 'error')
        }
        else{
            const alerta = document.querySelector('.alerta');
            if(alerta){
                alerta.remove();
            }
            cita.nombre = nombreTexto;
        }
    });
}

function mostrarAlerta(mensaje, tipo){
    //Si hay una alerta previa, entonces no crear otra
    const alertaPrevia = document.querySelector('.alerta');
    if(alertaPrevia){
        return;
    }
    const alerta = document.createElement('DIV');
    alerta.textContent = mensaje;
    alerta.classList.add('alerta');

    if(tipo === 'error'){
        alerta.classList.add('error');
    }
    //Insertar en el html
    const formulario = document.querySelector('.formulario');
    formulario.appendChild(alerta);
    //Eliminar la alerta despues de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);

}

function fechaCita(){
    const fechaInput = document.querySelector("#fecha");
    fechaInput.addEventListener('input', e => {
        const dia = new Date(e.target.value).getUTCDay();
        if([0,6].includes(dia)){
            e.preventDefault();
            fechaInput.value = '';
            mostrarAlerta('Fines de Semana no son permitidos', 'error');
        }else{
            cita.fecha = fechaInput.value;
        }
    });

}

function deshabilitarFechaAnterior(){
    const inputFecha = document.querySelector('#fecha');

    const fechaAhora = new Date();
    const year = fechaAhora.getFullYear();
    const mes = fechaAhora.getMonth() + 1;
    const dia = fechaAhora.getDate() + 1;
    const fechaDeshabilitar = `${year}-${mes}-${dia}`;

    inputFecha.min = fechaDeshabilitar;
}