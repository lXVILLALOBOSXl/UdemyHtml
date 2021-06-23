//Arreglos
//Manera mas utilizada para declara e imprimir arreglos
const numeros = [1,2,3,4,5]; //declarar
console.table(numeros); //imprimir en manera de tabla
//Manera menos utilizada para declara e imprimir arreglos
const meses = new Array('Enero','Febreor','Marzo','Abril','Mayo'); //Declara mediante el constructor
console.log(meses); //Imprimir en manera de lista
//En JS el arreglo puede ser compuesto por diferentes tipos de datos (primitivos, objetos y arreglos)
const arreglo = ["Hola",10,true,"Si",null,{nombre: "Luis", ocupacion: "Escuela"},[1,2,3]]; //Declarando arreglo mixto
console.log(arreglo);
//Acceder a los valore de un arreglo
console.log(numeros[4]);
console.log(numeros[200]); //Cuando accedemos donde no hay nada de informacion nos indica que no esta definida
console.log(meses.length); //Exension de un arreglo

//Iterar en lso elementos de un arreglo
meses.forEach(function(mes){
    console.log(mes);
})