const loginSection = document.getElementById('loginSection');
const calculatorSection = document.getElementById('calculatorSection');
const loginButton = document.getElementById('loginButton');
const cotizadorButton = document.getElementById('cotizador');
const resultadosDiv = document.getElementById('resultados');

const resultadosConversion = [];

loginButton.addEventListener('click', function() {
  // Aquí normalmente verificarías las credenciales del usuario, en este ejemplo solo simularemos el acceso
  const username = document.getElementById('username').value;
  if (username) {
    loginSection.style.display = 'none';
    calculatorSection.style.display = 'block';
  }
});

cotizadorButton.addEventListener('click', function() {
  convertir();
});

function convertir() {
  let resultado = 0;
  const dolar = 545;
  const euro = 300.89;
  const valore = parseFloat(document.getElementById("valor").value);
  
  if (isNaN(valore) || valore <= 0) {
    return alert("INGRESE UN NÚMERO, MAYOR A 0");
  }

  if (document.getElementById("uno").checked) {
    resultado = valore / dolar;
    resultado = resultado.toFixed(2);
    resultadosConversion.push("$" + resultado);
  } else if (document.getElementById("dos").checked) {
    resultado = valore / euro;
    resultado = resultado.toFixed(2);
    resultadosConversion.push("€" + resultado);
  } else {
    return alert("Debes completar todos los campos");
  }

  localStorage.setItem('resultadosConversion', JSON.stringify(resultadosConversion));
  showLatestResults();
}

function showLatestResults() {
  const storedResultadosConversion = JSON.parse(localStorage.getItem('resultadosConversion')) || [];
  const lastTwoResults = storedResultadosConversion.slice(-2);

  // Mostrar resultados en pantalla
  resultadosDiv.innerHTML = "<p>Últimos 2 resultados de cotizaciones:</p>" + lastTwoResults.join(', ');
}

// Mostrar resultados almacenados en el localStorage
showLatestResults();
