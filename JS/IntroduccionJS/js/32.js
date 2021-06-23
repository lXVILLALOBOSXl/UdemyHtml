//Clases

class Producto{ //Declaracion de clase
    constructor(nombre, precio){ //Constructor
        this.nombre = nombre; //Propiedades
        this.precio = precio;
    }

    mostrarProducto(){ //Metodo
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    mostrarPrecio(){
        return this.precio;
    }
}

const producto = new Producto("Acer", 12999); //Instancia de la clase Producto
console.log(producto.mostrarProducto()); //Llamada de funcion exclusiva mostrarProducto mediante instancia de Producto
console.log(producto.mostrarPrecio()); //Llamada de funcion exclusiva mostrarPrecio mediante instancia de Producto