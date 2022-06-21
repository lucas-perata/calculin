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
        return this.montoFinal = this.intereses + this.monto
    }

    calcularPagoMensual(){
         this.pagoMensual = this.montoFinal/this.cuotas
         return this.pagoMensual.toFixed(2)
    }
}

// Array

let prestamos = []

 // Loop cantidad de préstamos a calcular

function calculoPrestamos(){

    let numeroPrestamos = parseInt(prompt("¿Cuántos préstamos quieres calcular?"))

    for (let index = numeroPrestamos; index > 0; index--) {

        let monto = parseInt(prompt("Monto a solicitar:"))
        let cuotas = parseInt(prompt("Número de cuotas:")) 
        let interes = parseInt(prompt("Interés del préstamo (TNA):")) 
    
        const prestamo = new Prestamo(monto, interes, cuotas)
    
        prestamos.push(prestamo)
        
        if (numeroPrestamos > 1){
        alert("El interés de tu préstamo es de: " + prestamo.calcularIntereses() + "\nEl monto final a pagar es: " 
             + prestamo.calcularMontoFinal() + " en " + cuotas + " pagos de " + prestamo.calcularPagoMensual() + " pesos.")}
    }
}

// Resumen de cada préstamo

function resumenPrestamos(prestamos){

    let n = 1; 

    prestamos.forEach(element => {

        let resultadosContainer = document.createElement("div")

        resultadosContainer.innerHTML = `
                                <div class="resumen">
                                    <div class="prestamo-info"> 
                                <h3>Prestamo ${n}</h3>
                                <div>Monto a solicitar: ${element.monto} </div>
                                <div>Total a pagar: ${element.calcularMontoFinal()}</div>
                                <div>Pago mensual: ${element.calcularPagoMensual()} </div>
                                <div>Número de cuotas: ${element.cuotas} </div>
                                <div>TNA: ${element.interes} % </div>
                                </div>
                                </div>`

        document.querySelector(".resumen").appendChild(resultadosContainer)

    n++
    }) 

}

// Funcion que muestra el resultado para cada prestamo y el resumen final

function simulacionPrestamo() {

    calculoPrestamos()

    resumenPrestamos(prestamos)

};


 simulacionPrestamo()