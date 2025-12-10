// Archivo barril - exporta todas las funciones de los módulos
const { crearEstudiante } = require('./ejer1-registro');
const { fusionarCatalogos } = require('./ejer2-fusion');
const { procesarCompra } = require('./ejer3-ProceCompras');
const { estadisticas } = require('./ejer4-estadisticas');
const { configFinal } = require('./ejer5-motorConfi');

module.exports = {
    crearEstudiante,
    fusionarCatalogos,
    procesarCompra,
    estadisticas,
    configFinal
};
