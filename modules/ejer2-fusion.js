// Ejercicio 2: Fusión de catálogos digitales

// fusionarCatalogos recibe dos arreglos (a y b), los combina y devuelve
// un nuevo arreglo ordenado por la propiedad 'precio' de menor a mayor.
function fusionarCatalogos(a, b) {
    try {
        // Validar que 'a' sea un arreglo
        if (!Array.isArray(a)) {
            throw new Error("El primer parámetro no es un arreglo");
        }
        // Validar que 'b' sea un arreglo
        if (!Array.isArray(b)) {
            throw new Error("El segundo parámetro no es un arreglo");
        }

        // Fusionar los dos arreglos en uno nuevo (no muta 'a' ni 'b')
        const fusionado = [...a, ...b];

        // Ordenar el arreglo resultante por 'precio' usando un intercambio simple
        // (estructura de doble bucle; para tamaños grandes se recomienda usar .sort)
        for (let i = 0; i < fusionado.length; i++) {
            for (let j = i + 1; j < fusionado.length; j++) {
                // Si el elemento en i tiene mayor precio que el de j, intercambiarlos
                if (fusionado[i].precio > fusionado[j].precio) {
                    let temp = fusionado[i];
                    fusionado[i] = fusionado[j];
                    fusionado[j] = temp;
                }
            }
        }

        // Retornar el arreglo fusionado y ordenado
        return fusionado;
    } catch (error) {
        // Si ocurre un error, se registra en consola y la función devuelve null
        console.error("Error:", error.message);
        return null;
    }
}

// Exportar la función para que pueda usarse en otros módulos
module.exports = { fusionarCatalogos };
