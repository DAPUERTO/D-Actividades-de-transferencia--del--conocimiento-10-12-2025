// ...existing code...
// Ejercicio 4: Informe de estadísticas deportivas

// La función recibe un arreglo de jugadores y devuelve un resumen con:
// - puntos del primer jugador
// - puntos totales de todos los jugadores
// - una copia del arreglo de jugadores (no muta el original)
function estadisticas(jugadores) {
    try {
        // Validar que 'jugadores' sea un arreglo y no esté vacío
        if (!Array.isArray(jugadores) || jugadores.length === 0) {
            throw new Error("Debe proporcionar un arreglo de jugadores válido");
        }

        // Validar que cada jugador tenga 'nombre', 'stats' y 'stats.puntos' numérico
        for (let i = 0; i < jugadores.length; i++) {
            if (!jugadores[i].nombre || !jugadores[i].stats || typeof jugadores[i].stats.puntos !== 'number') {
                throw new Error("Cada jugador debe tener nombre y stats con puntos");
            }
        }

        // Destructuración anidada para obtener los puntos del primer jugador
        const [{ stats: { puntos: puntosPrimero } }] = jugadores;

        // Sumar los puntos de todos los jugadores para obtener el total
        let puntosTotal = 0;
        for (let i = 0; i < jugadores.length; i++) {
            puntosTotal = puntosTotal + jugadores[i].stats.puntos;
        }

        // Crear una copia superficial del arreglo de jugadores (evita mutar el original)
        const jugadoresProcesados = [...jugadores];

        // Devolver el objeto con el resumen solicitado
        return {
            puntosPrimerJugador: puntosPrimero,
            puntosTotal: puntosTotal,
            jugadoresProcesados: jugadoresProcesados
        };
    } catch (error) {
        // Registrar el error y devolver null para indicar fallo en el procesamiento
        console.error("Error:", error.message);
        return null;
    }
}

// Exportar la función para uso en otros módulos
module.exports = { estadisticas };
// ...existing code...