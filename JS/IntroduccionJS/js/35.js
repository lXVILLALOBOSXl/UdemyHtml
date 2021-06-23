//Promises refelja unn valor que puede estar disponible: ahora, en un futuro  o nunca
//resolve funciona para indicar que si se cumplio la promesa
//reject funciona para indicar que no se cumplio la promesa

// En los Promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected : Se ha rechazado o no se pudo cumplir

const usuarioAuntenticado = new Promise((resolve, reject) => { // Fulfilled
    const auth = true;
    if(auth){
        resolve("Usuario Autenticado");
    }else{
        reject("No se pudo iniciar sesion");
    }
});

console.log(usuarioAuntenticado);

const usuarioAuntenticado2 = new Promise((resolve, reject) => { //Rejected
    const auth = false;
    if(auth){
        resolve("Usuario Autenticado");
    }else{
        reject("No se pudo iniciar sesion");
    }
});

console.log(usuarioAuntenticado2);

const usuarioAuntenticado3 = new Promise((resolve, reject) => { //Pending
    const auth = false;
});

console.log(usuarioAuntenticado3);

usuarioAuntenticado
    .then( resultado => console.log(resultado)) //Si se cumplio despues imprime el estado
    .catch( error => console.log(error))  //Si no se cumplio despues imprime el estado

usuarioAuntenticado2
    .then( resultado => console.log(resultado)) //Si se cumplio despues imprime el estado
    .catch( error => console.log(error))  //Si no se cumplio despues imprime el estado

usuarioAuntenticado3
    .then( resultado => console.log(resultado)) //Si se cumplio despues imprime el estado
    .catch( error => console.log(error))  //Si no se cumplio despues imprime el estado
