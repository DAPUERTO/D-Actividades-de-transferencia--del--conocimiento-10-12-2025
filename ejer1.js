// Ejercicio 1: Sistema de registro académico
const { crearEstudiante } = require('./modules');

console.log("=== Ejercicio 1: Sistema de Registro Académico ===\n");

const estudiante1 = crearEstudiante("Juan Pérez", 85, 90, 78, 92);
console.log("Estudiante válido:", estudiante1);

console.log("\nIntentando con nota inválida:");
const estudiante2 = crearEstudiante("María García", 85, "abc", 78);
console.log("Resultado:", estudiante2);

console.log("\nEstudiante con una sola nota:");
const estudiante3 = crearEstudiante("Carlos López", 95);
console.log("Resultado:", estudiante3);
