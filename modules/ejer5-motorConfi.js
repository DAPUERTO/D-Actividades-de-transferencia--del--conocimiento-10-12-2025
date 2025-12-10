// Ejercicio 5: Motor de configuración avanzada
function configFinal(...configs) {
    try {
        for (const config of configs) {
            if (typeof config !== 'object' || config === null || Array.isArray(config)) {
                throw new Error("Cada configuración debe ser un objeto válido");
            }
        }

        let objetoFinal = {};
        for (const config of configs) {
            objetoFinal = { ...objetoFinal, ...config };
        }
        objetoFinal.validacion = true;

        return objetoFinal;
    } catch (error) {
        console.error("Error:", error.message);
        return { validacion: false };
    }
}

module.exports = { configFinal };
