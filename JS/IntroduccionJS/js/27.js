// While Loop evalua la condicion y ejecuta lo que este dentro

let i = 20; // Indice

while(i < 10) { // Condición
    console.log('Desde el while loop');
    i++;  // Incremento
}

let x = 0; // Indice

while(x < 10) { // Condición
    console.log(x);
    x++;  // Incremento
}

let a = 0; // Indice

while(a < 10) { // Condición
    if( a % 2 === 0 ) {
        console.log(`El Número ${a} es PAR`);
    } else {
        console.log(`El Número ${a} es IMPAR`);
    }
    a++;  // Incremento
}

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800}
];

let b = 0; // Indice

while(b < carrito.length) { // Condición
    console.log(carrito[b].nombre);
    b++;  // Incremento
}



// Do While Loop ejecuta lo que este dentro al menos una vez y despues evalua la condicion

let z = 100;

do {
    console.log(z);
    z++;
} while( z < 10);