//============Bienvenida a la pagina!==========
let nombre = ""
do{nombre = prompt("Ingrese su nombre") } while( ! isNaN(nombre))
   
console.log("bienvenidx " + nombre + " a la calculadora de carlitos")


//=====Definimos el arral para almacenar los resulatados  de la conversión======

let resultadosConversion = [];

 //==========Función para obtener el día de la semana en español===================
 function obtenerDiaSemana() {
    const diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const fechaActual = new Date();
    const diaSemana = diasSemana[fechaActual.getDay()];
    return diaSemana;
}

//=============Función para preguntar si desea saber la fecha actual==========
function preguntarFechaActual() {
    const respuesta = prompt("¿Deseas saber la fecha actual? (Sí / No)");

    if (respuesta !== null) {
        const respuestaNormalizada = respuesta.trim().toLowerCase();

        if (respuestaNormalizada === "sí" || respuestaNormalizada === "si") {
            const diaSemana = obtenerDiaSemana();
            console.log("Hoy es " + diaSemana);
        } else {
            console.log("¡Ok! No te mostraré la fecha actual.");
        }
    }
}

//===================Llamar a la función al cargar la página========
preguntarFechaActual();

function convertir() {
        //==================VARIABLES=================
    let valore = 0
    let resultado = 0
    let dolar = 545
    let euro = 300.89

    //==================COMPROBAR NUMERO=================
    valore = parseFloat(document.getElementById("valor").value)
    
    if(isNaN(valore)|| valore <= 0){
        return console.log("INGRESE UN NÚMERO, MAYOR A 0 ")
    }
        //==================CAMBIO DOLAR A PESO=================
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar
        resultado = resultado.toFixed(2)
        console.log("El cambio de Pesos a Dolar blue es de: $" + resultado)
        resultadosConversion.push("$" + resultado); //agregamos el resultado al array
    }
    
    //==================CAMBIO DOLAR A EURO=================
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        resultado = resultado.toFixed(2)
        console.log("El cambio de Pesos a Euro oficial es de: €" + resultado);
        resultadosConversion.push("€" + resultado);
    }
    
    else {
        console.log("Debes completar todos los campos")
    }
}
 console.log("Resulatdos de conversion:" , resultadosConversion)

