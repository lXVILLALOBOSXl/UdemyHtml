//forEach y map
const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];
//forEach; sirve para iterar dentro de un arreglo
carrito.forEach( producto => console.log(producto.nombre));
const nuevoCarrito = carrito.forEach( producto => producto.nombre);
//map sirve para iterar adentro de un arreglo y si se requiere, guardar la infromacion
carrito.map( producto => console.log(producto.nombre));
const nuevoCarrito2 = carrito.map( producto => producto);
//con template string
const nuevoCarrito3 = carrito.map( producto => `${producto.nombre} - ${producto.precio}`);
//
console.log(nuevoCarrito); //forEach para guardar arreglos
console.log(nuevoCarrito2); //map para guardar arreglos
console.log(nuevoCarrito3); //map para guardar arreglos