// Objetos
const producto = {
    nombre: "MacBook 13 M1",
    precio: 29999,
    estaDisponible: true
}

console.log(producto);
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.estaDisponible);
console.log(producto["precio"]);

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
//eliminar propiedades
delete producto.estaDisponible;
console.log(producto);