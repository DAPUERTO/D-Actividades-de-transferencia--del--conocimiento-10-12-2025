// Ejercicio 2: Fusión de catálogos digitales
const { fusionarCatalogos } = require('./modules');

console.log("=== Ejercicio 2: Fusión de Catálogos Digitales ===\n");

const catalogoA = [
    { id: 1, nombre: "Curso JavaScript", precio: 40 },
    { id: 2, nombre: "Curso HTML", precio: 35 }
];

const catalogoB = [
    { id: 3, nombre: "Curso CSS", precio: 30 }
];

console.log("Catálogo A:");
for (let i = 0; i < catalogoA.length; i++) {
    console.log("- " + catalogoA[i].nombre + ": $" + catalogoA[i].precio);
}

console.log("\nCatálogo B:");
for (let i = 0; i < catalogoB.length; i++) {
    console.log("- " + catalogoB[i].nombre + ": $" + catalogoB[i].precio);
}

const resultado = fusionarCatalogos(catalogoA, catalogoB);
console.log("\nCatálogo fusionado (ordenado por precio):");
for (let i = 0; i < resultado.length; i++) {
    console.log("- " + resultado[i].nombre + ": $" + resultado[i].precio);
}

console.log("\nIntentando con parámetro inválido:");
const resultado2 = fusionarCatalogos(catalogoA, "no es arreglo");
console.log("Resultado:", resultado2);
