//Tipos de datos

//String o cadenas de texto
const nombreProducto = "Monitor de 20 Pulgadas";
const nombreProducto2 = String("Monitor de 30\" Pulgadas");
const nombreProducto3 = new String("Monitor de 40 Pulgadas");

console.log(nombreProducto.length);
console.log(typeof nombreProducto2);
console.log(typeof nombreProducto3);

// IndexOf (retorna posicion)
console.log(nombreProducto2.indexOf('"'));
console.log(nombreProducto3.indexOf('1280'));

// Include (retorna true o false)
console.log(nombreProducto2.includes('Monitor'));
console.log(nombreProducto3.includes('Centimetros'));
