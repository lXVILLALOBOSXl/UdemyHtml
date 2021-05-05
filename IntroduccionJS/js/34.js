//Try Catch sirve para intentar hacer algo y si da error se pueda ejecutar el programa

const numero1 = 20;
const numero3 = 30;


console.log(numero1);

try { //Intenta hacer lo que esta dentro de Try
    console.log(numero2); //Error porque la variable numero2 no esta definida
} catch (error) { //Entra por que existio un errro dentro del try
    console.log(error); //Y nos muestra el error
}

console.log(numero3);