    //============Bienvenida a la pagina!==========
let nombre = ""

do{nombre = prompt("Ingrese su nombre") } while( ! isNaN(nombre))

alert("bienvenidx " + nombre + " a la calculadora de carlitos")

function convertir() {
    //==================VARIABLES=================
    let valore = 0
    let resultado = 0
    let dolar = 481.25
    let euro = 300.89

    //==================COMPROBAR NUMERO=================
    valore = parseFloat(document.getElementById("valor").value)
    
    if(isNaN(valore)|| valore <= 0){
        return alert("INGRESE UN NÚMERO, MAYOR A 0 ")
    }

    //==================CAMBIO DOLAR A PESO=================
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar
        resultado = resultado.toFixed(2)
        alert("El cambio de Pesos a Dolar blue es de: $" + resultado)
    }

    //==================CAMBIO DOLAR A EURO=================
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        resultado = resultado.toFixed(2)
        alert("El cambio de Pesos a Euro oficial es de: €" + resultado)
    }

    else {
        alert("Debes completar todos los campos")
    }
}