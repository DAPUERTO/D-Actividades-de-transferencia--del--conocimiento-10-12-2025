// ...existing code...
// Programa principal: menú interactivo por consola que ejecuta los 5 ejercicios

const prompt = require('prompt-sync')(); // Módulo para lectura síncrona desde consola
// Importar funciones desde la carpeta 'modules' (index.js debe exportarlas)
const { crearEstudiante, fusionarCatalogos, procesarCompra, estadisticas, configFinal } = require('./modules');

let opcion = ''; // Opción seleccionada por el usuario
// Bucle principal: se repite hasta que el usuario escriba '0'
while (opcion !== '0') {
    // Mostrar el menú de opciones
    console.log("\n--- MENU DE EJERCICIOS ---");
    console.log("1. Sistema de registro académico");
    console.log("2. Fusión de catálogos digitales");
    console.log("3. Procesamiento de compras");
    console.log("4. Estadísticas deportivas");
    console.log("5. Motor de configuración");
    console.log("0. Salir");

    opcion = prompt("Seleccione ejercicio: "); // Leer opción del usuario

    if (opcion === '1') {
        // Ejercicio 1: solicitar datos del estudiante y sus notas
        console.log("\n--- Ejercicio 1: Registro Académico ---");
        const nombre = prompt("Ingrese nombre del estudiante: ");
        const cantNotas = parseInt(prompt("¿Cuántas notas va a ingresar?: "));
        const notas = [];
        for (let i = 0; i < cantNotas; i++) {
            const nota = parseFloat(prompt(`Nota ${i + 1}: `)); // Convertir a número decimal
            notas.push(nota);
        }
        // Llamar a crearEstudiante pasando el nombre y las notas (spread)
        console.log("\nResultado:", crearEstudiante(nombre, ...notas));

    } else if (opcion === '2') {
        // Ejercicio 2: crear dos catálogos (A y B) y fusionarlos
        console.log("\n--- Ejercicio 2: Fusión de Catálogos ---");
        const cantA = parseInt(prompt("¿Cuántos productos en catálogo A?: "));
        const catA = [];
        for (let i = 0; i < cantA; i++) {
            const nombre = prompt(`Nombre producto ${i + 1}: `);
            const precio = parseFloat(prompt(`Precio producto ${i + 1}: `));
            catA.push({ id: i + 1, nombre, precio }); // id secuencial para catálogo A
        }
        const cantB = parseInt(prompt("¿Cuántos productos en catálogo B?: "));
        const catB = [];
        for (let i = 0; i < cantB; i++) {
            const nombre = prompt(`Nombre producto ${i + 1}: `);
            const precio = parseFloat(prompt(`Precio producto ${i + 1}: `));
            catB.push({ id: cantA + i + 1, nombre, precio }); // ids continúan desde A
        }
        // Mostrar resultado de fusionarCatalogos (array combinado y ordenado)
        console.log("\nResultado:", fusionarCatalogos(catA, catB));

    } else if (opcion === '3') {
        // Ejercicio 3: recolectar datos del cliente y los productos comprados
        console.log("\n--- Ejercicio 3: Procesamiento de Compras ---");
        const nombreCliente = prompt("Nombre del cliente: ");
        const correo = prompt("Correo del cliente: ");
        const cliente = { nombre: nombreCliente, correo }; // objeto cliente

        const cantProds = parseInt(prompt("¿Cuántos productos compró?: "));
        const productos = [];
        for (let i = 0; i < cantProds; i++) {
            const nombre = prompt(`Nombre producto ${i + 1}: `);
            const precio = parseFloat(prompt(`Precio producto ${i + 1}: `));
            productos.push({ nombre, precio });
        }
        // Llamar a procesarCompra y mostrar resumen (o null si hay error)
        console.log("\nResultado:", procesarCompra(cliente, productos));

    } else if (opcion === '4') {
        // Ejercicio 4: ingresar jugadores y sus estadísticas
        console.log("\n--- Ejercicio 4: Estadísticas Deportivas ---");
        const cantJugadores = parseInt(prompt("¿Cuántos jugadores?: "));
        const jugadores = [];
        for (let i = 0; i < cantJugadores; i++) {
            const nombre = prompt(`Nombre jugador ${i + 1}: `);
            const puntos = parseInt(prompt(`Puntos de ${nombre}: `));
            const asistencias = parseInt(prompt(`Asistencias de ${nombre}: `));
            jugadores.push({ nombre, stats: { puntos, asistencias } }); // estructura esperada por estadisticas()
        }
        // Mostrar objeto resumen devuelto por estadisticas()
        console.log("\nResultado:", estadisticas(jugadores));

    } else if (opcion === '5') {
        // Ejercicio 5: combinar múltiples objetos de configuración
        console.log("\n--- Ejercicio 5: Motor de Configuración ---");
        const cantConfigs = parseInt(prompt("¿Cuántas configuraciones?: "));
        const configs = [];
        for (let i = 0; i < cantConfigs; i++) {
            console.log(`\nConfiguración ${i + 1}:`);
            const cantProps = parseInt(prompt("¿Cuántas propiedades?: "));
            const config = {};
            for (let j = 0; j < cantProps; j++) {
                const clave = prompt(`Nombre propiedad ${j + 1}: `);
                const valor = prompt(`Valor de ${clave}: `);
                config[clave] = valor; // todos los valores se guardan como strings
            }
            configs.push(config);
        }
        // Mostrar objeto resultante de configFinal(...configs)
        console.log("\nResultado:", configFinal(...configs));

    } else if (opcion !== '0') {
        // Manejo de opción inválida (no muestra el menú de nuevo)
        console.log("Opción no válida, intente de nuevo.");
    }
}
// Mensaje final al salir del bucle
console.log("Fin del programa.");
