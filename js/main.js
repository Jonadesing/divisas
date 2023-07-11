function convertir() {
    let valore =parseInt(document.getElementById ("valor").value);
    let resultado = 0;
    let dolar = 481.25;
    let euro = 300.89;
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar;
        alert("El cambio de Pesos a Dolar blue es de:$"+ resultado);
    }
    else if (document.getElementById("dos").checked) {
        resultado = valore / euro;
        alert("El cambio de Pesos a Euros oficial es de:€" + resultado);
    }
    else {
        alert("Debes completar todos los campos")
    }
}