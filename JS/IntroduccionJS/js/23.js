//Arrow functions

//Expresion de la funcion (Solo con esta expresion se pueden utilizar las arrow functions)
const sumar = function(num1, num2){
    console.log(num1 + num2);
}
sumar(5,10);

const sumar2 = (num1, num2) => { //Sintaxis original
    console.log(num1 + num2);
}
sumar2(10,10);

const sumar3 = (num1, num2) => console.log(num1 + num2); //Cuando se tiene una sola linea se puede hacer esta sintaxis
sumar3(5,8);

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`);
}

aprendiendo("JavaScript");

const aprendiendo2 = tecnologia => console.log(`Aprendiendo ${tecnologia}`); //Sintaxis cuando se tiene una linea y un parametro

aprendiendo2("Phyton");

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
meses.forEach(mes => {
    if(mes == "Marzo"){
        console.log("Marzo si existe");
    }
});

const resultado3 = carrito.some(producto => producto.nombre === "Celular"); //Return implicito
console.log(resultado3);
//Arrow function
const resultado4 = carrito.some(producto => producto.nombre === "Laptop");
console.log(resultado4);
//Suma de propiedades en un arreglo de objetos (reduce)
const resultado5 = carrito.reduce((total, producto) => total + producto.precio, 0);
console.log(resultado5);
const resultado6 = carrito.reduce((total, producto) => total + producto.precio, 0); //Arrow function
console.log(resultado6);
//Filter, obtener objetos de un arreglo
const resultado7 = carrito.filter(producto => producto.precio > 400);
console.log(resultado7);
const resultado8 = carrito.filter(producto => producto.nombre === "Celular"); //Arrow function
console.log(resultado8);
