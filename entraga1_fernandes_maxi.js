let productos = []

// Prendas Disponibles
const prendasDisponibles = ["remera", "short", "pantalon", "jean", "buzo", "campera", "zapatos", "zapatillas", "vestido", "gorra", "gorro"]

// Usuario y Contraseña
const user = "Maxi"
const password = "Pass1234"

// Función que le pide datos al usuario
function solicitarDatos(){ 
    let usuario = prompt("Ingrese su usuario")
    let contraseña = prompt ("Ingrese su contraseña")
    // Valida los datos ingresados
    if (validarDatos(usuario,contraseña)){
        iniciarProceso()
    }
}

// Función que valida los datos ingresados
function validarDatos(usuario, contraseña){
    let mensaje = ""
    if (!usuario){
        mensaje = "El campo Usuario es obligatorio"
    }
    if(!contraseña){
        mensaje += "\nEl campo Contraseña es obligatorio"
    }
    if (usuario != user || contraseña != password){
        mensaje += "\nUsuario y/o Contraseña incorrecto"
    }
    if (mensaje == "") {
        return true
    } else {
        alert(mensaje)
        return false
    }
}

// Función que agrega prendas a la colección
function agregarPrenda() {
    let pregunta = prompt("¿Qué prenda quieres guardar?")
    while (pregunta !== null && pregunta.trim() !== "" && pregunta.toLowerCase() !== "ninguna") {
        let prendaIngresada = pregunta.trim().toLowerCase()
        
        // Validar si la prenda está en la lista de prendas disponibles
        if (prendasDisponibles.includes(prendaIngresada)) {
            alert(`Prenda "${prendaIngresada}" agregada a la colección`)
            productos.push(prendaIngresada)  // Si la prenda es valida la agrega al array de productos
        } else {
            alert(`"${prendaIngresada}" No Disponible`)
        }
        
        pregunta = prompt("¿Qué otra prenda quieres guardar?")
    }
    mostrarPrendas()  // Muestra las prendas guardadas
}

// Función que muestra las prendas guardadas
function mostrarPrendas() {
    if (productos.length > 0) {
        // Separa las prendas con una coma (,)
        let compra = confirm(`Tus prendas guardadas son: \n${productos.join(", ")} \n¿Quieres concretar la compra?`)
        if (compra) {
            alert("Compra realizada, gracias por confiar en nosotros")
        }
    } else {
        alert("No hay prendas guardadas")
    }
}

// Función para iniciar el proceso
function iniciarProceso () {
    let x = true
    while (x) {
        alert(`¡Bienvenido ${user}!`)
        let inicio = confirm("¿Quieres guardar una prenda a tu carrito de compras?")
        if (inicio) {
            agregarPrenda()
        } 
        x = false
    }
}

// Iniciar La Ejecución
solicitarDatos()