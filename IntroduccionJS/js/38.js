//Fetch Api te permite enviar informacion al servidor u obtener informacion de un servidor

async function obtenerEmpleados() {

    const archivo = 'empleados.json';

    // fetch(archivo) //fetch funciona para traer la informacion de un archivo solicitado
    //     .then( resultado => resultado.json()) //Despues de traer la info guardamos el archvio tipo json
    //     .then( datos => { //despues ese archivo lo utilizamos como datos
    //         // console.log(datos.empleados);

    //         const { empleados } = datos; //El contenido del archivo lo pasamos a una variamble
    //        console.log(empleados);
    //     });

    const resultado = await fetch(archivo); //Hasta que se consulte la info del archivo
    const datos = await resultado.json(); //Se va a guardar en datos el json del archivo
    console.log(datos); //se va imprimir la info
}
obtenerEmpleados();