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

        let monto = parseInt(prompt("Monto a pagar:"))
        let cuotas = parseInt(prompt("Número de cuotas:")) 
        let interes = parseInt(prompt("Interés del préstamo (TNA):")) 
    
        const prestamo = new Prestamo(monto, interes, cuotas)
    
        prestamos.push(prestamo)
    
        alert("El interés de tu préstamo es de: " + prestamo.calcularIntereses() + "\nEl monto final a pagar es: " 
             + prestamo.calcularMontoFinal() + " en " + cuotas + " pagos de " + prestamo.calcularPagoMensual() + " pesos.")
    }
}

// Resumen de cada préstamo

function prestamoFinal(prestamos){

    let n = 1; 

    prestamos.forEach(element => {
    alert("Tu préstamo número " + n + "  por el monto de " + element.monto + " peso tiene un interés de " + element.interes 
    + " por ciento dividido en " + element.cuotas + " pagos." )
    n++
    }) 

    alert("¡Gracias por usar la calculadora!")

}

// Funcion que muestra el resultado para cada prestamo y el resumen final

function simulacionPrestamo() {

    calculoPrestamos()

    prestamoFinal(prestamos)

};


simulacionPrestamo()