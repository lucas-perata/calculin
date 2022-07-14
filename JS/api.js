let oficial = document.querySelector(".oficial")
let blue = document.querySelector(".blue")
let prestamo = document.querySelector(".prestamos")
let inflacion = document.querySelector(".inflacion")

fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(data=> {return data.json()})
    .then(dolar => {oficial.innerHTML += dolar.oficial.value_avg})

fetch("https://api.bluelytics.com.ar/v2/latest")
    .then(data=> {return data.json()})
    .then(dolar => {blue.innerHTML += dolar.blue.value_avg})

fetch("../JSON/data.json")
    .then( (res) => { return res.json()})
    .then( (tasas) => {prestamo.innerHTML += tasas.tasas.tasa_prestamo})
    
fetch("../JSON/data.json")
    .then( (res) => { return res.json()})
    .then( (tasas) => {inflacion.innerHTML += tasas.tasas.inflacion})
