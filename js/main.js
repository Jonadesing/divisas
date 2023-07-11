function convertir() {
    var valore =parseInt(document.getElementById ("valor").value);
    var resultado = 0;
    var dolar = 481.25;
    var euro = 300.89;
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolares es de:$"+ resultado);
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("Elcambio de Pesos a Euros es de:€" + resultado);
    }
    else {
        alert("Debes completar todos los campos")
    }
}