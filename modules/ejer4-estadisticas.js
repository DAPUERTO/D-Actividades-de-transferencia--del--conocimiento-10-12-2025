// Ejercicio 4: Informe de estadísticas deportivas
function estadisticas(jugadores) {
    try {
        if (!Array.isArray(jugadores) || jugadores.length === 0) {
            throw new Error("Debe proporcionar un arreglo de jugadores válido");
        }
        for (let i = 0; i < jugadores.length; i++) {
            if (!jugadores[i].nombre || !jugadores[i].stats || typeof jugadores[i].stats.puntos !== 'number') {
                throw new Error("Cada jugador debe tener nombre y stats con puntos");
            }
        }

        const [{ stats: { puntos: puntosPrimero } }] = jugadores;

        let puntosTotal = 0;
        for (let i = 0; i < jugadores.length; i++) {
            puntosTotal = puntosTotal + jugadores[i].stats.puntos;
        }

        const jugadoresProcesados = [...jugadores];

        return {
            puntosPrimerJugador: puntosPrimero,
            puntosTotal: puntosTotal,
            jugadoresProcesados: jugadoresProcesados
        };
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

module.exports = { estadisticas };
