//this sirve para hacer referencia a los valores del mismo objeto
//Tambien se puede acceder con el nombre de la clase
const reservacion = {
    nombre: "Luis",
    apellido: "Villalobos",
    total: 500,
    informacion: function(){
        console.log(`El cliente ${reservacion.nombre} reservo y su cantidad a pagar es de ${reservacion.total}`);
    }
}
//Con this no es necesario el nombre de la clase
const reservacion2 = {
    nombre: "Adrian",
    apellido: "Rivera",
    total: 500,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
//Con arrow functios es necesario definir una propiedad tipo window 
//Window.nombre = "cecilia";
const reservacion3 = {
    nombre: "Cecilia",
    apellido: "Balderrama",
    total: 500, //undefinido
    informacion: () => { 
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

reservacion.informacion();
reservacion2.informacion();
reservacion3.informacion();