// Ejercicio 3: Procesamiento de compras
function procesarCompra(cliente, productos) {
    try {
        if (!cliente || !cliente.nombre || !cliente.correo) {
            throw new Error("El cliente debe tener nombre y correo");
        }
        if (!Array.isArray(productos) || productos.length === 0) {
            throw new Error("Los productos deben ser un arreglo con al menos un elemento");
        }
        for (let i = 0; i < productos.length; i++) {
            if (!productos[i].nombre || typeof productos[i].precio !== 'number') {
                throw new Error("Cada producto debe tener nombre y precio válido");
            }
        }

        const infoCliente = { ...cliente };
        const [primerProducto, ...resto] = productos;

        let precioTotal = 0;
        for (let i = 0; i < productos.length; i++) {
            precioTotal = precioTotal + productos[i].precio;
        }

        return {
            cliente: infoCliente,
            totalProductos: productos.length,
            precioTotal: precioTotal,
            primerProducto: primerProducto.nombre
        };
    } catch (error) {
        console.error("Error:", error.message);
        return null;
    }
}

module.exports = { procesarCompra };
