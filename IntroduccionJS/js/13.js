//Unir objetos (spread operator)
const producto = {
    nombre: "MacBook 13 M1",
    precio: 29999,
    estaDisponible: true
}

const medidas = {
    peso: "1kg",
    medida: "1m"
}

const nuevoProducto = { ...producto, ...medidas};

console.log(producto);
console.log(nuevoProducto);