//Herencia 
class Producto{ //Declaracion de clase
    constructor(nombre, precio){ //Constructor
        this.nombre = nombre; //Propiedades
        this.precio = precio;
    }

    mostrarProducto(){ //Metodo
        return `El Producto ${this.nombre} tiene un precio de: ${this.precio}`;
    }

    mostrarPrecio(){
        console.log(this.precio);
    }
}

const producto = new Producto("Acer", 12999); //Instancia de la clase Producto

class Libro extends Producto{ //extends nos dice que la clase Libro (hijo) hereda de la clase padre (Producto)
    constructor(nombre, precio, isbn){
        super(nombre, precio); //super funciona para utilizar el constructor de la clase padre
        this.isbn = isbn;
    }

    mostrarProducto(){
        return `${super.mostrarProducto()} y su ISBN es ${this.isbn}`; //super.metodo() funciona para utilizar metodos de la clase padre
    }

    mostrarPrecio(){
        super.mostrarPrecio();
        console.log("Y esta disponible");
    }
}

const libro = new Libro("Programando en JavaScript", 399, "28392732"); //Instancia de la clase Producto

console.log(producto.mostrarProducto());
console.log(producto.mostrarPrecio());
console.log(libro.mostrarProducto());
console.log(libro.mostrarPrecio());
