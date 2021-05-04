//Metodos para los arreglos
const numeros = [1,2,3,4,5]; 
console.table(numeros); 

const meses = new Array('Febrero','Marzo','Abril','Mayo'); 
console.log(meses); 

//Agregar elementos a un arreglo
numeros[5] = 6;
console.table(numeros); 
//Modificar el elemento
numeros[2] = 2.5;
console.table(numeros); 
//Agregar un elemento al final
numeros.push(7);
console.table(numeros); 
numeros.push(8,9,10); //varios al mismo tiempo
console.table(numeros); 
//Agregar un elemento al iniciio
numeros.unshift(-1);
console.table(numeros); 
numeros.unshift(-4,-3,-2); //varios al mismo tiempo
console.table(numeros); 
//Eliminar ultimo elemento de un arreglo
numeros.pop();
console.table(numeros); 
//Eliminar el primer elemento de  un arreglo
numeros.shift();
console.table(numeros); 
//Eliminar cierto elemento del arreglo
numeros.splice(5,1); //param 1 que indice, param 2 cuantos elementos  a partir de ahi
console.table(numeros); 
//Copia de areglos por seguridad (recomendado) con spread operator
// const nuevoMeses = [...meses,"Junio"]; //No se modifica el arreglo origiinal (PUSH)
// console.table(nuevoMeses); 
nuevoMeses = ["Enero", ...meses]; //No se modifica el arreglo origiinal (UNSHIFT)
console.table(nuevoMeses); 