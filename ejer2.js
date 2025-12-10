// Ejercicio 2: Fusión de catálogos digitales

// Importar la función que combina y ordena catálogos desde el módulo 'modules'
const { fusionarCatalogos } = require('./modules');

// Encabezado informativo que se muestra en consola al ejecutar este script
console.log("=== Ejercicio 2: Fusión de Catálogos Digitales ===\n");

// Definición del catálogo A: arreglo de objetos con id, nombre y precio
const catalogoA = [
    { id: 1, nombre: "Curso JavaScript", precio: 40 },
    { id: 2, nombre: "Curso HTML", precio: 35 }
];

// Definición del catálogo B: arreglo con más productos (ids independientes)
const catalogoB = [
    { id: 3, nombre: "Curso CSS", precio: 30 }
];

// Mostrar en consola los productos del catálogo A (formato legible)
console.log("Catálogo A:");
for (let i = 0; i < catalogoA.length; i++) {
    console.log("- " + catalogoA[i].nombre + ": $" + catalogoA[i].precio);
}

// Mostrar en consola los productos del catálogo B
console.log("\nCatálogo B:");
for (let i = 0; i < catalogoB.length; i++) {
    console.log("- " + catalogoB[i].nombre + ": $" + catalogoB[i].precio);
}

// Llamar a fusionarCatalogos para combinar y ordenar ambos arreglos por precio
const resultado = fusionarCatalogos(catalogoA, catalogoB);

// Mostrar el catálogo fusionado y ordenado; se asume que fusionarCatalogos devuelve un arreglo
console.log("\nCatálogo fusionado (ordenado por precio):");
for (let i = 0; i < resultado.length; i++) {
    console.log("- " + resultado[i].nombre + ": $" + resultado[i].precio);
}

// Caso de prueba para validar manejo de errores: pasar un segundo parámetro inválido
console.log("\nIntentando con parámetro inválido:");
const resultado2 = fusionarCatalogos(catalogoA, "no es arreglo");
// Se espera que la función registre el error y devuelva null (o similar)
console.log("Resultado:", resultado2);
