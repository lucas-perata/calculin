class Usuario {
    constructor(nombre, email){
        this.nombre = nombre
        this.email = email
    }
}

let datos = []

function registroUsuario(){
    const nombre =  document.querySelector(".nombre").value 
    const email =  document.querySelector(".email").value 

    let usuario = new Usuario(nombre, email)
    console.log(usuario)
    datos.push(usuario)
    sessionStorage.setItem('dato', JSON.stringify(datos))
    }

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

document.addEventListener("DOMContentLoaded", function() { 
    // this function runs when the DOM is ready, i.e. when the document has been parsed
    document.querySelector(".ingresos").addEventListener("click", registroUsuario)
    
});


comprobaciónRegistro()
