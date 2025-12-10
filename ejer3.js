// Ejercicio 3: Procesamiento de compras
const { procesarCompra } = require('./modules');

console.log("=== Ejercicio 3: Procesamiento de Compras ===\n");

const cliente = {
    nombre: "Ana Martínez",
    correo: "ana@email.com"
};

const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 }
];

console.log("Cliente: " + cliente.nombre + " - " + cliente.correo);
console.log("\nProductos:");
for (let i = 0; i < productos.length; i++) {
    console.log("- " + productos[i].nombre + ": $" + productos[i].precio);
}

const informe = procesarCompra(cliente, productos);
console.log("\nInforme de compra:", informe);

console.log("\nIntentando con cliente sin correo:");
const clienteIncompleto = { nombre: "Pedro" };
const resultado = procesarCompra(clienteIncompleto, productos);
console.log("Resultado:", resultado);
