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
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(validRegex)){
        let usuario = new Usuario(nombre, email)
        console.log(usuario)
        datos.push(usuario)
        sessionStorage.setItem('dato', JSON.stringify(datos))
    }
    else {
        alert("Error")
    }
}

// Función que analiza si hay informacion sobre el usuario en storage

function comprobaciónRegistro(){
    if (sessionStorage.getItem("dato")) {
        console.log("Usuario reconocido")
    }
    else {  let usuarioNuevo = document.createElement("div")
    
    usuarioNuevo.innerHTML = `
    <section class="formulario">
    <div class="container">
        <h2>Ingreso:</h2>
    <form name="usuarios" action="">
    <label for="nombre">Nombre:</label>
    <input class="nombre" type="text"> <br>
    <label for="mail">Email:</label>
    <input type="email" class="email"> <br>
    
    <button class="ingresos">Ingresar</button>
    </form>
    </div>
    </section>
                            
                            `
    document.querySelector("main").innerHTML = " "
    document.querySelector("main").appendChild(usuarioNuevo)}
}

// funcionamiento de la página

document.addEventListener("DOMContentLoaded", function() { 

    document.querySelector(".ingresos").addEventListener("click", registroUsuario)
    
});


comprobaciónRegistro()
