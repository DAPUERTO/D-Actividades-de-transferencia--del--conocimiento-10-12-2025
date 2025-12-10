// Ejercicio 5: Motor de configuración avanzada

// configFinal acepta un número variable de objetos de configuración y los
// combina en un solo objeto final. Realiza validaciones y marca la
// configuración como válida si todo está correcto.
function configFinal(...configs) {
    try {
        // Validar que cada argumento sea un objeto no nulo y que no sea un arreglo
        for (const config of configs) {
            if (typeof config !== 'object' || config === null || Array.isArray(config)) {
                // Si alguno no es un objeto válido, lanzar excepción para entrar al catch
                throw new Error("Cada configuración debe ser un objeto válido");
            }
        }

        // Inicializar el objeto resultante vacío
        let objetoFinal = {};
        // Mezclar las configuraciones en orden: los valores de la derecha sobrescriben a los de la izquierda
        for (const config of configs) {
            objetoFinal = { ...objetoFinal, ...config };
        }
        // Añadir una propiedad que indica que la validación fue exitosa
        objetoFinal.validacion = true;

        // Devolver el objeto final combinado
        return objetoFinal;
    } catch (error) {
        // Registrar el error y devolver un objeto indicando fallo en la validación
        console.error("Error:", error.message);
        return { validacion: false };
    }
}

// Exportar la función para que pueda usarse en otros módulos
module.exports = { configFinal };