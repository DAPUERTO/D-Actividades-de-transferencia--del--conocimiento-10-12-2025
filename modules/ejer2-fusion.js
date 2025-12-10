// Ejercicio 2: Fusión de catálogos digitales
function fusionarCatalogos(a, b) {
    try {
        if (!Array.isArray(a)) {
            throw new Error("El primer parámetro no es un arreglo");
        }
        if (!Array.isArray(b)) {
            throw new Error("El segundo parámetro no es un arreglo");
        }

        const fusionado = [...a, ...b];

        // Ordenar por precio (burbuja simple)
        for (let i = 0; i < fusionado.length; i++) {
            for (let j = i + 1; j < fusionado.length; j++) {
                if (fusionado[i].precio > fusionado[j].precio) {
                    let temp = fusionado[i];
                    fusionado[i] = fusionado[j];
                    fusionado[j] = temp;
                }
            }
        }

        return fusionado;
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

module.exports = { fusionarCatalogos };
