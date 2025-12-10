
// Ejercicio 1: Sistema de registro académico



// crearEstudiante recibe un nombre y un número variable de notas.
// Valida que todas las notas sean números válidos, separa la primera nota,
// calcula el promedio del resto y devuelve un objeto resumen.
function crearEstudiante(nombre, ...notas) {
    try {
        // Validar que cada elemento en 'notas' sea un número y no NaN
        for (let i = 0; i < notas.length; i++) {
            if (typeof notas[i] !== 'number' || isNaN(notas[i])) {
                // Lanzar error si alguna nota no es válida
                throw new Error("La nota " + notas[i] + " no es un número válido");
            }
        }

        // Obtener la primera nota y el resto usando destructuración
        const [primeraNota, ...restoNotas] = notas;

        // Sumar las notas restantes
        let sumaResto = 0;
        for (let i = 0; i < restoNotas.length; i++) {
            sumaResto = sumaResto + restoNotas[i];
        }
        // Calcular el promedio de las notas restantes; si no hay, promedio = 0
        const promedioResto = restoNotas.length > 0 ? sumaResto / restoNotas.length : 0;

        // Devolver un objeto con la información relevante del estudiante
        return {
            nombre: nombre,
            primeraNota: primeraNota,
            promedioResto: promedioResto,
            totalNotas: notas.length
        };
    } catch (error) {
        // En caso de error, mostrar el mensaje en consola y devolver null
        console.error("Error:", error.message);
        return null;
    }
}

// Exportar la función para que pueda usarse en otros módulos
module.exports = { crearEstudiante };
