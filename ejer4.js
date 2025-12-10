// Ejercicio 4: Informe de estadísticas deportivas

// Importar la función que genera el resumen estadístico desde la carpeta 'modules'
const { estadisticas } = require('./modules');

// Encabezado informativo que se muestra al ejecutar el script
console.log("=== Ejercicio 4: Informe de Estadísticas Deportivas ===\n");

// Datos de ejemplo: arreglo de jugadores con estructura { nombre, stats: { puntos, asistencias } }
const jugadores = [
    { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
    { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];

// Mostrar en consola la lista de jugadores y sus puntos (formato legible)
console.log("Jugadores:");
for (let i = 0; i < jugadores.length; i++) {
    console.log("- " + jugadores[i].nombre + ": " + jugadores[i].stats.puntos + " puntos");
}

// Llamar a la función estadisticas() con datos válidos y mostrar el objeto resumen devuelto
const stats = estadisticas(jugadores);
console.log("\nEstadísticas del equipo:", stats);

// Caso de prueba: datos inválidos (falta la propiedad 'stats') para verificar manejo de errores
console.log("\nIntentando con datos inválidos:");
const jugadoresInvalidos = [
    { nombre: "Carlos" } // dato incompleto: no tiene stats.puntos
];
const resultado = estadisticas(jugadoresInvalidos);
// Se espera que estadisticas registre el error y devuelva null
console.log("Resultado:", resultado);

// Caso de prueba: arreglo vacío para verificar validación de entrada
console.log("\nIntentando con arreglo vacío:");
const resultado2 = estadisticas([]);
// Se espera null y un mensaje de error en consola
console.log("Resultado:", resultado2);
