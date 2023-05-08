// Get references to the buttons and divs
var button1 = document.getElementById('small-navbar-boton1');
var button2 = document.getElementById('small-navbar-boton2');
var button3 = document.getElementById('small-navbar-boton3');
var div1 = document.getElementById('TECNOLOGIAS-PRINCIPALES');
var div2 = document.getElementById('TECNOLOGIAS-COMPLEMENTARIAS');
var div3 = document.getElementById('DISEÑO-GRAFICO');

// Add click event listeners to the buttons
button1.addEventListener('click', function() {
  div1.style.display = 'flex';
  div2.style.display = 'none';
  div3.style.display = 'none';
});
button2.addEventListener('click', function() {
  div1.style.display = 'none';
  div2.style.display = 'flex';
  div3.style.display = 'none';
});
button3.addEventListener('click', function() {
    div1.style.display = 'none';
  div2.style.display = 'none';
  div3.style.display = 'flex';
});
