//POO


//Objeto literal
const producto = { //Solo un objeto con solo estas propiedades
    nombre: "MacBook",
    precio: 34999,
    estaDisponible: true
}

//Object constructor
function Producto(nombre, precio, estaDisponible){ //Se pueden crear diversos objetos a partir de este constructor de clase
    this.nombre = nombre;
    this.precio = precio;
    this.estaDisponible = estaDisponible;
}
const producto2 = new Producto("Acer", 12999, true); //Instancia de la clase
const producto3 = new Producto("Dell", 10999, true);
const producto4 = new Producto("HP", 9999, false);
console.log(producto); //objeto literal
console.log(producto2); //objeto constructor

