 //-----Obtener elementos del DOM
 const loginSection = document.getElementById('loginSection');
 const calculatorSection = document.getElementById('calculatorSection');
 const loginButton = document.getElementById('loginButton');
 const cotizadorButton = document.getElementById('cotizador');
 const resultadosDiv = document.getElementById('resultados');

 //------Array para almacenar los resultados de cotización
 const resultadosConversion = [];

 //------Manejador de evento para el botón de inicio de sesión
 loginButton.addEventListener('click', function() {
   // Simulación de inicio de sesión, ocultar sección de inicio de sesión y mostrar calculadora
   const username = document.getElementById('username').value;
   if (username) {
     loginSection.style.display = 'none';
     calculatorSection.style.display = 'block';
   }
 });

 //-----Manejador de evento para el botón de cotización
 cotizadorButton.addEventListener('click', function() {
   convertir();
 });

 //------Función para realizar la conversión de divisas
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

 //-------Función para mostrar los últimos resultados almacenados
 function showLatestResults() {
   const storedResultadosConversion = JSON.parse(localStorage.getItem('resultadosConversion')) || [];
   const lastTwoResults = storedResultadosConversion.slice(-2);

   //------Mostrar resultados en pantalla
   resultadosDiv.innerHTML = "<p>Últimos 2 resultados de cotizaciones:</p>" + lastTwoResults.join(', ');
 }

 //-----Mostrar resultados almacenados al cargar la página
 showLatestResults();