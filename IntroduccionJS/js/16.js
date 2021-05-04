//Metodos para los arreglos
const meses = ['Enero','Febrero','Marzo','Abril','Mayo']; 

const carrito = [
    { nombre: "Monitor 20 Pulgadas", precio: 500},
    { nombre: "Television 50 pulgadas", precio: 700},
    { nombre: "Tablet", precio: 300},
    { nombre: "Audifonos", precio: 200},
    { nombre: "Teclado", precio: 50},
    { nombre: "Celular", precio: 500},
    { nombre: "Bocinas", precio: 300},
    { nombre: "Laptop", precio: 800}
];

//Checar si un elemento existe en el arreglo
meses.forEach(function(mes) {
    if(mes == "Marzo"){
        console.log("Marzo si existe");
    }
});
//Include
const resultado = meses.includes("Marzo");
console.log(resultado);
const resultado2 = meses.includes("Diciembre");
console.log(resultado2);
//Some ideal para arreglo de objetos
const resultado3 = carrito.some(function(producto){
    return producto.nombre === "Celular";
});
console.log(resultado3);
//Arrow function
const resultado4 = carrito.some(producto => producto.nombre === "Laptop");
console.log(resultado4);
//Suma de propiedades en un arreglo de objetos (reduce)
const resultado5 = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);
console.log(resultado5);
const resultado6 = carrito.reduce((total, producto) => total + producto.precio, 0); //Arrow function
console.log(resultado6);
//Filter, obtener objetos de un arreglo
const resultado7 = carrito.filter(function(producto){
    return producto.precio > 400;
});
console.log(resultado7);
const resultado8 = carrito.filter((producto) => producto.nombre === "Celular"); //Arrow function
console.log(resultado8);
