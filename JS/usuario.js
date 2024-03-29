class Usuario {
    
    constructor(nombre, email){
        this.nombre = nombre
        this.email = email
    }

}

// Array para almacenar usuario

let datos = []

// Funcion que registra al usuario nuevo

function registroUsuario(){
    const nombre =  document.querySelector(".nombre").value 
    const email =  document.querySelector(".email").value 
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex) && nombre != ""){
        let usuario = new Usuario(nombre, email)
        console.log(usuario)
        datos.push(usuario)
        localStorage.setItem('dato', JSON.stringify(datos))
        document.location.reload()
    }
    else {
        Swal.fire("Comprueba la información solicitada")
    }
}

// Plantilla para usuarios nuevos 

function plantillaUsuario(){
    let usuarioNuevo = document.createElement("div")
    
    usuarioNuevo.innerHTML = `
                        <section class="formulario usuario">
                            <div class="container">
                                <h2>Ingreso:</h2>
                            <form name="usuarios" action="">
                            <label for="nombre">Nombre:</label>
                            <input class="nombre" type="text"> <br>
                            <label for="mail">Email:</label>
                            <input type="text" class="email"> <br>
                            <button class="ingreso" type="button">Ingresar</button>
                            </form>
                            </div>
                        </section>   `

    document.querySelector("main").innerHTML = " "
    document.querySelector("main").appendChild(usuarioNuevo)
}

// Función que analiza si hay informacion sobre el usuario en storage y da un mensaje de bienvenida

function comprobaciónRegistro(){
    localStorage.getItem("dato") ? console.log("Usuario reconocido"): plantillaUsuario() 
     
    let nombreUsuario = JSON.parse(localStorage.getItem("dato"))

    Swal.fire({
        title: `¡${nombreUsuario[0].nombre}, bienvenido a Calculin!`,
        text: "Usa esta calculadora para ver cómo los pagos de tu préstamo personal se desglosan mes a mes.",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comenzar'})
}

// funcionamiento de la página - Espera a que esté todo cargado

document.addEventListener("DOMContentLoaded", function() { 

    document.querySelector(".ingreso").addEventListener("click", registroUsuario)
    
});
   



comprobaciónRegistro()