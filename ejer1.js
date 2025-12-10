// Importar la función crearEstudiante desde el índice del directorio 'modules'
const { crearEstudiante } = require('./modules');

// Encabezado informativo que se muestra en consola
console.log("=== Ejercicio 1: Sistema de Registro Académico ===\n");

// Caso de prueba: estudiante con varias notas válidas
// Se espera un objeto resumen con nombre, primeraNota, promedioResto y totalNotas
const estudiante1 = crearEstudiante("Juan Pérez", 85, 90, 78, 92);
console.log("Estudiante válido:", estudiante1);

// Caso de prueba: contiene una nota inválida (string "abc")
// Se espera manejo de error dentro de crearEstudiante y resultado null
console.log("\nIntentando con nota inválida:");
const estudiante2 = crearEstudiante("María García", 85, "abc", 78);
console.log("Resultado:", estudiante2);

// Caso de prueba: estudiante con una sola nota
// Verifica que la función maneje arrays de longitud 1 (promedioResto = 0)
console.log("\nEstudiante con una sola nota:");
const estudiante3 = crearEstudiante("Carlos López", 95);
console.log("Resultado:", estudiante3);
