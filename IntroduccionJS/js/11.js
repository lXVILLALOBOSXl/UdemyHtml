//Destructuring de objetos
const producto = {
    nombre: "MacBook 13 M1",
    precio: 29999,
    estaDisponible: true
}

const nombreProducto = producto.nombre;
const precioProducto = producto.precio;

console.log(nombreProducto);
console.log(precioProducto);
console.log("Destructuring: ");
//Destrucutring
const {nombre, precio} = producto;
console.log(nombre);
console.log(precio);