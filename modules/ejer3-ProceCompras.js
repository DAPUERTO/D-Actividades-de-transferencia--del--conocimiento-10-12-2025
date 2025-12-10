// Ejercicio 3: Procesamiento de compras

// procesarCompra valida datos del cliente y productos, calcula total y devuelve resumen.
function procesarCompra(cliente, productos) {
    try {
        // Validar que exista el cliente y tenga nombre y correo
        if (!cliente || !cliente.nombre || !cliente.correo) {
            throw new Error("El cliente debe tener nombre y correo");
        }

        // Validar que 'productos' sea un arreglo no vacío
        if (!Array.isArray(productos) || productos.length === 0) {
            throw new Error("Los productos deben ser un arreglo con al menos un elemento");
        }

        // Validar que cada producto tenga 'nombre' y 'precio' numérico
        for (let i = 0; i < productos.length; i++) {
            if (!productos[i].nombre || typeof productos[i].precio !== 'number') {
                throw new Error("Cada producto debe tener nombre y precio válido");
            }
        }

        // Crear una copia superficial de los datos del cliente (no muta el original)
        const infoCliente = { ...cliente };

        // Destructurar para obtener el primer producto y el resto
        const [primerProducto, ...resto] = productos;

        // Calcular el precio total sumando los precios de todos los productos
        let precioTotal = 0;
        for (let i = 0; i < productos.length; i++) {
            precioTotal = precioTotal + productos[i].precio;
        }

        // Devolver un objeto resumen con información útil de la compra
        return {
            cliente: infoCliente,
            totalProductos: productos.length,
            precioTotal: precioTotal,
            primerProducto: primerProducto.nombre
        };
    } catch (error) {
        // En caso de error, registrar y devolver null para indicar fallo
        console.error("Error:", error.message);
        return null;
    }
}

// Exportar la función para uso en otros módulos
module.exports = { procesarCompra };
