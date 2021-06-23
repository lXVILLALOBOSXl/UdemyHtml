// Objetos
const producto = { //Asi se declara un objeto
    nombre: "MacBook 13 M1", //asi se declaran sus propiedades
    precio: 29999,
    estaDisponible: true
}

console.log(producto);
console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.estaDisponible);
console.log(producto["precio"]); //Otra manera de acceder a las propiedades

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg';
//eliminar propiedades
delete producto.estaDisponible;
console.log(producto);