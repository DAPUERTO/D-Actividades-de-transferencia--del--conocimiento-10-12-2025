// Ejercicio 3: Procesamiento de compras

// Importar la función que valida y resume una compra desde 'modules'
const { procesarCompra } = require('./modules');

// Encabezado informativo que se muestra al ejecutar el script
console.log("=== Ejercicio 3: Procesamiento de Compras ===\n");

// Datos de prueba: cliente válido con nombre y correo
const cliente = {
    nombre: "Ana Martínez",
    correo: "ana@email.com"
};

// Datos de prueba: lista de productos con nombre y precio (números)
const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 75 }
];

// Mostrar información del cliente en consola
console.log("Cliente: " + cliente.nombre + " - " + cliente.correo);

// Mostrar la lista de productos en formato legible
console.log("\nProductos:");
for (let i = 0; i < productos.length; i++) {
    console.log("- " + productos[i].nombre + ": $" + productos[i].precio);
}

// Llamar a procesarCompra con datos válidos y mostrar el informe devuelto
// Se espera un objeto resumen con cliente, totalProductos, precioTotal y primerProducto
const informe = procesarCompra(cliente, productos);
console.log("\nInforme de compra:", informe);

// Caso de prueba: cliente incompleto (falta correo) para verificar manejo de errores
console.log("\nIntentando con cliente sin correo:");
const clienteIncompleto = { nombre: "Pedro" };
// Se espera que procesarCompra registre el error y devuelva null
const resultado = procesarCompra(clienteIncompleto, productos);
console.log("Resultado:", resultado);

