// Ejercicio 4: Informe de estadísticas deportivas
const { estadisticas } = require('./modules');

console.log("=== Ejercicio 4: Informe de Estadísticas Deportivas ===\n");

const jugadores = [
    { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
    { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } }
];

console.log("Jugadores:");
for (let i = 0; i < jugadores.length; i++) {
    console.log("- " + jugadores[i].nombre + ": " + jugadores[i].stats.puntos + " puntos");
}

const stats = estadisticas(jugadores);
console.log("\nEstadísticas del equipo:", stats);

// Ejemplo con datos inválidos
console.log("\nIntentando con datos inválidos:");
const jugadoresInvalidos = [
    { nombre: "Carlos" }
];
const resultado = estadisticas(jugadoresInvalidos);
console.log("Resultado:", resultado);

// Ejemplo con arreglo vacío
console.log("\nIntentando con arreglo vacío:");
const resultado2 = estadisticas([]);
console.log("Resultado:", resultado2);
