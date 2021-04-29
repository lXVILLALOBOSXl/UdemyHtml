"use strict"; // Hace que el compilador see mas estricto y nos informe de mas errores logicos
// Objetos freeze y seal
const producto = {
    nombre: "MacBook 13 M1",
    precio: 29999,
    estaDisponible: true
}

Object.freeze(producto);
// producto.imagen = "imagen.jpg"; con use strict marcaria error, sin el no, pero no se permite agregar, eliminar o modificar la propiedad, seal solo te permite modificar valores
console.log(Object.isFrozen(producto));
