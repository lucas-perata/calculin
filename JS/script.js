class Prestamo {

    constructor(monto, interes, cuotas){
        this.monto = monto
        this.interes = interes
        this.cuotas = cuotas
    }

    calcularIntereses(){
        return this.intereses = (this.interes*this.monto)/100
    }

    calcularMontoFinal(){
         return this.montoFinal = (this.intereses + this.monto)
    }

    calcularPagoMensual(){
         this.pagoMensual = this.montoFinal/this.cuotas
         return this.pagoMensual.toFixed(2)
    }
}

// Array para guardar prestamos

let prestamos = []

//Contador de préstamos para DOM 

let numero = 1;

 // Esta función toma los numeros registrados por el usuario e imprime los préstamos en el HTML

function calculoPrestamos(monto, cuotas, interes){

        const prestamo = new Prestamo(monto, interes, cuotas)

        prestamos.push(prestamo)
        
        sessionStorage.setItem('prestamo', JSON.stringify(prestamos))

        let resultadosContainer = document.createElement("div")

        resultadosContainer.innerHTML = `
                                <div class="resumen">
                                    <div class="prestamo-info"> 
                                <h3 id="info-prestamo">Prestamo ${numero} </h3>
                                <div>Monto a solicitar: ${prestamo.monto} </div>
                                <div>Intereses: ${prestamo.calcularIntereses()}</div>
                                <div>Total a pagar: ${prestamo.calcularMontoFinal()}</div>
                                <div>Pago mensual: ${prestamo.calcularPagoMensual()} </div>
                                <div>Número de cuotas: ${prestamo.cuotas} </div>
                                <div>TNA: ${prestamo.interes} % </div>
                                </div>
                                </div>`

        document.querySelector(".resumen").appendChild(resultadosContainer)

        eliminarPrestamos()
}

// Limpiar calculadora 

function reseteoCalculadora(){
    let calcu = document.querySelector("form")
    calcu.reset()
}

// Boton para eliminar los préstamos

function eliminarPrestamos(){

    if (!document.querySelector(".eliminar")){
    let borradoPrestamos = document.createElement("div")

    borradoPrestamos.classList.add("botones-prestamos")

    borradoPrestamos.innerHTML += `<button class="eliminar">Eliminar</button> `

    document.querySelector(".resultados").appendChild(borradoPrestamos)

    document.querySelector(".eliminar").addEventListener("click", () => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "No es posible revertir el proceso.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '¡Borradas!',
                'Tus simulaciones fueron eliminadas',
                'success',  document.querySelector(".resumen").innerHTML = " ",
                document.querySelector(".eliminar").remove(),
                prestamos.length = [], 
                numero = 1, 
                sessionStorage.removeItem('prestamo')
              )
            }
          })
    }
    )}
}

// Funcion final que engloba los procedimientos de la página

function simulacionPrestamo() {

    let monto = parseInt(document.querySelector(".monto").value)
    let cuotas = document.querySelector(".pagos").value
    let interes = document.querySelector(".interes").value

    if(!monto || !cuotas || interes == "") {
        Swal.fire("Completa todos los campos solicitados")
        } 
    else {
        calculoPrestamos(monto, cuotas, interes)
        numero++
        reseteoCalculadora()
    }
};

// Boton que ejecuta la función para simular los prestamos

document.querySelector('.calculo').addEventListener("click", simulacionPrestamo)

