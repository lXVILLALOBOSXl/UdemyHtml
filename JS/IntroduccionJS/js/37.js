// Async y Await se utilizan para ejecutar instrucciones en funcion de tiempo

function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere...');

        setTimeout( () => { //Funciona para contar 5 segundos antes de resolver la promise
            resolve('Los Clientes fueron Descargados'); //Resolvemos la promesa
        }, 5000 );
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere...');

        setTimeout( () => { //Funciona para contar 5 segundos antes de resolver la promise
            resolve('Los Pedidos fueron Descargados'); //Resolvemos la promesa
        }, 3000 );
    });
}

async function app() { //Es necesario ejecutar Async para indicar que dentro del codigo existen procesos que se pueden ejecutar durante la marcha del programa
   try {
    //    const clientes = await descargarNuevosClientes(); //Se espera hasta que termine de dar una respuesta la funcion
    //    const pedidos = await descargarUltimosPedidos(); //Se bloquea hasta que la funcion anterior se cumpla
    //    console.log(clientes);
    //    console.log(pedidos);

    const resultado = await Promise.all([ descargarNuevosClientes(), descargarUltimosPedidos() ]); //con promise.all trabajamos dos consultas al mismo tiempo es decir que se ejecutan una tras otra y la siguiente linea no espera un resultado de async para continuar
    console.log(resultado[0]);
    console.log(resultado[1]);
   } catch (error) {
       console.log(error);
   }

  
}

app();
console.log("Este proceso no se bloquea");