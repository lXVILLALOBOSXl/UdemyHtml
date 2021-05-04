//Estructuras de control

const puntaje = 1000;
const puntaje2 = 1001;

//Diferencia entre == y ===
// La diferencia es que mientras que con el == antes de hacer la comparación se convierten ambos datos a un tipo común.
// Con === ninguno de estos valores se convierte de manera implícita antes de ser comparado. Por eso aunque el valor del dato sea igual, si el tipo de dato no coincide el operador responde que no son iguales.

var num = 0;
var str = "0";
 
console.log(num == str); // true
console.log(num === str); // false

if(puntaje === 1000) { 
    console.log('Si el puntaje es 1000');   
} else {
     console.log('No es igual');
 }


 if(puntaje2 !== 1000) { 
    console.log('No es igual');
 } else {
    console.log('Si el puntaje es 1000');
 }

const efectivo = 1000;
const carrito = 800;

if( efectivo > carrito ) {
    console.log('El Usuario puede pagar');
} else {
    console.log('Fondos Insuficientes');
}


const rol = 'VISITANTE';

if(rol === 'ADMINISTRADOR') {
    console.log('Acceso a todo el sistema');
} else if(rol === 'EDITOR') {
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho')
} else {
    console.log('No tienes acceso');
}