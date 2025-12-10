// Ejercicio 5: Motor de configuración avanzada
const { configFinal } = require('./modules');

console.log("=== Ejercicio 5: Motor de Configuración Avanzada ===\n");

const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
const extraConfig = { nivel: 2, tema: "oscuro" };
const moreConfig = { debug: false, version: "1.0" };

console.log("Configuración base: modo=" + baseConfig.modo + ", lenguaje=" + baseConfig.lenguaje);
console.log("Configuración extra: nivel=" + extraConfig.nivel + ", tema=" + extraConfig.tema);

const configuracion = configFinal(baseConfig, extraConfig, moreConfig);
console.log("\nConfiguración final:", configuracion);

console.log("\nIntentando con parámetro inválido:");
const resultado = configFinal(baseConfig, "no es objeto", extraConfig);
console.log("Resultado:", resultado);
