// Prototype Sirve para crear funciones que solo se utilizan en un objeto en especcifico.


function Producto(nombre, precio, estaDisponible){ 
    this.nombre = nombre;
    this.precio = precio;
    this.estaDisponible = estaDisponible;
}
//La funcion mostrarProducto es exclusiva solo de instancias de la clase Producto
Producto.prototype.mostrarProducto = function(){
    return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

function Cliente(nombre, apellido){ 
    this.nombre = nombre;
    this.apellido = apellido;
}
//La funcion mostrarCliente es exclusiva solo de instancias de la clase Cliente
Producto.prototype.mostrarCliente = function(){
    return `El Cliente ${this.nombre} ${this.precio}`;
}

const producto = new Producto("Acer", 12999, true); //Instancia de la clase Producto
const cliente = new Producto("MArco","Barajas");  //Instancia de la clase Cliente
console.log(producto.mostrarProducto()); //Llamada de funcion exclusiva mostrarProducto mediante instancia de Producto
console.log(cliente.mostrarCliente()); //Llamada de funcion exclusiva mostrarCliente mediante instancia de Cliente
//console.log(cliente.mostrarProducto()); //Error ya que mostrarProducto es un metodo exclusivo de la clse Producto y cliente es una instancia de la clase Cliente