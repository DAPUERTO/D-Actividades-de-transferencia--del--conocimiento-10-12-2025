
// Ejercicio 5: Motor de configuración avanzada

// Importar la función que combina múltiples objetos de configuración
const { configFinal } = require('./modules');

console.log("=== Ejercicio 5: Motor de Configuración Avanzada ===\n");

// Configuración base (valores por defecto)
const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
// Configuración que sobrescribe/añade propiedades a la base
const extraConfig = { nivel: 2, tema: "oscuro" };
// Otra configuración adicional
const moreConfig = { debug: false, version: "1.0" };

// Mostrar información breve de las configuraciones iniciales
console.log("Configuración base: modo=" + baseConfig.modo + ", lenguaje=" + baseConfig.lenguaje);
console.log("Configuración extra: nivel=" + extraConfig.nivel + ", tema=" + extraConfig.tema);

// Combinar las configuraciones en orden (los valores a la derecha sobrescriben a la izquierda)
const configuracion = configFinal(baseConfig, extraConfig, moreConfig);
// Mostrar el objeto final resultante (incluye propiedad 'validacion' cuando corresponde)
console.log("\nConfiguración final:", configuracion);

// Caso de prueba con parámetro inválido para verificar manejo de errores
console.log("\nIntentando con parámetro inválido:");
const resultado = configFinal(baseConfig, "no es objeto", extraConfig);
// Mostrar el resultado esperado (objeto con validacion:false o null según implementación)
console.log("Resultado:", resultado);
