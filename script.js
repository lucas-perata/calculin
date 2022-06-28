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

 // Esta función toma los numeros registrados por el usuario e imprime los préstamos en el HTML

function calculoPrestamos(){

        let monto = parseInt(document.querySelector(".monto").value)
        let cuotas = document.querySelector(".pagos").value
        let interes = document.querySelector(".interes").value
    
        const prestamo = new Prestamo(monto, interes, cuotas)

        prestamos.push(prestamo)
        
        localStorage.setItem('prestamo', JSON.stringify(prestamos))

        
        let resultadosContainer = document.createElement("div")

        resultadosContainer.innerHTML = `
                                <div class="resumen">
                                    <div class="prestamo-info"> 
                                <h3 id="info-prestamo">Prestamo ${document.querySelectorAll("#info-prestamo").length + 1} </h3>
                                <div>Monto a solicitar: ${prestamo.monto} </div>
                                <div>Intereses: ${prestamo.calcularIntereses()}</div>
                                <div>Total a pagar: ${prestamo.calcularMontoFinal()}</div>
                                <div>Pago mensual: ${prestamo.calcularPagoMensual()} </div>
                                <div>Número de cuotas: ${prestamo.cuotas} </div>
                                <div>TNA: ${prestamo.interes} % </div>
                                </div>
                                </div>`

        document.querySelector(".resumen").appendChild(resultadosContainer)

       

}

// Limpiar calculadora 

function reseteoCalculadora(){
    let a = document.querySelector("form")
    a.reset()
}

// Boton para eliminar los préstamos

function eliminarPrestamos(){


    if (!document.querySelector(".eliminar")){
    let buttonPrestamos = document.createElement("div")

    buttonPrestamos.innerHTML = `<button class="eliminar">Eliminar</button> `

    document.querySelector(".resultados").appendChild(buttonPrestamos)

    document.querySelector(".eliminar").addEventListener("click", () => {
        document.querySelector(".resumen").innerHTML = " "
        document.querySelector(".eliminar").remove()
    })}
    
}

// Funcion que muestra el resultado para cada prestamo y el resumen final

function simulacionPrestamo() {

    calculoPrestamos()

    reseteoCalculadora()

    eliminarPrestamos()
    
};

// Boton que ejecuta la función para simular los prestamos

document.querySelector('.calculo').addEventListener("click", simulacionPrestamo)


