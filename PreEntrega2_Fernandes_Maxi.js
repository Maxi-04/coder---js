let productos = [];  // Array inical de prendas
let totalCompra = 0; // Valor inicial de la compra

// Prendas Disponibles
const prendasDisponibles = [
    {nombre: "remera", precio: 10000},
    {nombre: "jean", precio: 20000},
    {nombre: "short", precio: 5000},
    {nombre: "buzo", precio: 30000},
    {nombre: "campera", precio: 50000},
    {nombre: "zapatos", precio: 50000},
    {nombre: "zapatillas", precio: 50000},
    {nombre: "pantalon", precio: 20000},
    {nombre: "gorro", precio: 5000},
    {nombre: "gorra", precio: 5000},
    {nombre: "vestido", precio: 25000}
];

// Usuario y Contraseña
const user = "Maxi";
const password = "Pass1234";

// Función que le pide datos al usuario
function solicitarDatos(){ 
    let usuario = prompt("Ingrese su usuario");
    let contraseña = prompt("Ingrese su contraseña");
    if (validarDatos(usuario, contraseña)){
        iniciarProceso();
    }
}

// Función que valida los datos ingresados
function validarDatos(usuario, contraseña){
    let mensaje = "";
    if (!usuario) mensaje = "El campo Usuario es obligatorio";
    if (!contraseña) mensaje += "\nEl campo Contraseña es obligatorio";
    if (usuario !== user || contraseña !== password) mensaje += "\nUsuario y/o Contraseña incorrecto";
    if (mensaje === "") return true;
    alert(mensaje);
    return false;
}

// Función que agrega prendas a la colección
function agregarPrenda() {
    let pregunta = prompt("¿Qué prenda quieres guardar?");
    while (pregunta !== null && pregunta.trim() !== "" && pregunta.toLowerCase() !== "ninguna") {
        let prendaIngresada = pregunta.trim().toLowerCase();
        let prenda = prendasDisponibles.find(p => p.nombre === prendaIngresada); // Agarra el nombre de la prenda
        if (prenda) {
            alert(`Prenda "${prendaIngresada}" agregada a la colección`);
            productos.push(prenda);
            totalCompra += prenda.precio;
        } else {
            alert(`"${prendaIngresada}" No Disponible`);
        }
        pregunta = prompt("¿Qué otra prenda quieres guardar?");
    }
    eliminarPrenda();
}

// Función que elimina prendas de la colección 
function eliminarPrenda () {
    let consulta = confirm("¿Quieres eliminar una prenda de tu colección?");
    if (consulta) {
        let preguntar = prompt("¿Qué prenda quieres eliminar?");
        while (preguntar !== null && preguntar.trim() !== "" && preguntar.toLowerCase() !== "ninguna") {
            let prendaSeleccionada = preguntar.trim().toLowerCase();
            let prendaToDelete = productos.find(p => p.nombre === prendaSeleccionada); // Encuentra el nombre de la prenda (si existe)
            if (prendaToDelete) {
                alert(`Prenda "${prendaSeleccionada}" eliminada`);
                productos = productos.filter(p => p !== prendaToDelete); // Elimina la prenda del array
                totalCompra -= prendaToDelete.precio;
            } else {
                alert(`"${prendaSeleccionada}" No está en tu colección`);
            }
            preguntar = prompt("¿Qué otra prenda quieres eliminar?");
        }
    }
    mostrarPrendas();
}

// Función que muestra las prendas guardadas
function mostrarPrendas() {
    if (productos.length > 0) {
        let nombresPrendas = productos.map(p => p.nombre); // Muestra solo el nombre de las prendas guardadas
        let compra = confirm(`Tus prendas guardadas son: \n${nombresPrendas.join(", ")} \nTotal: $${totalCompra} \n¿Quieres concretar la compra?`);
        if (compra) {
            alert(`Compra realizada por un total de $${totalCompra}. Gracias por confiar en nosotros.`);
        }
    } else {
        alert("No hay prendas guardadas");
    }
}

// Función para iniciar el proceso
function iniciarProceso() {
    alert(`¡Bienvenido ${user}!`);
    let inicio = confirm("¿Quieres guardar una prenda a tu lista de deseos?");
    if (inicio) {
        agregarPrenda();
    }
}

// Iniciar la ejecución
solicitarDatos();