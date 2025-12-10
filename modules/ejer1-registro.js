// Ejercicio 1: Sistema de registro académico
function crearEstudiante(nombre, ...notas) {
    try {
        for (let i = 0; i < notas.length; i++) {
            if (typeof notas[i] !== 'number' || isNaN(notas[i])) {
                throw new Error("La nota " + notas[i] + " no es un número válido");
            }
        }

        const [primeraNota, ...restoNotas] = notas;

        let sumaResto = 0;
        for (let i = 0; i < restoNotas.length; i++) {
            sumaResto = sumaResto + restoNotas[i];
        }
        const promedioResto = restoNotas.length > 0 ? sumaResto / restoNotas.length : 0;

        return {
            nombre: nombre,
            primeraNota: primeraNota,
            promedioResto: promedioResto,
            totalNotas: notas.length
        };
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

module.exports = { crearEstudiante };
