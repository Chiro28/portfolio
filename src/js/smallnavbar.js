// Get references to the buttons and divs
var button1 = document.getElementById('small-navbar-boton1');
var button2 = document.getElementById('small-navbar-boton2');
var button3 = document.getElementById('small-navbar-boton3');
var div1 = document.getElementById('TECNOLOGIAS-PRINCIPALES');
var div2 = document.getElementById('TECNOLOGIAS-COMPLEMENTARIAS');
var div3 = document.getElementById('DISEÑO-GRAFICO');
div2.style.display = 'none';
div3.style.display = 'none';
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

const btn = document.querySelectorAll(".small-navbar button");
W// Listen for click event
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function (e) {

      // Create span element
      let ripple = document.createElement("span");

      // Add ripple class to span
      ripple.classList.add("ripple");

      // Add span to the button
      this.appendChild(ripple);

      // Get position of X
      let x = e.clientX - e.target.offsetLeft;
      // Get position of Y
      let y = (e.pageY-document.querySelector('#sobremi').offsetHeight-document.querySelector('header').offsetHeight) - (e.target.offsetTop-document.querySelector('#sobremi').offsetHeight-document.querySelector('header').offsetHeight);

      // Position the span element
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      // Remove span after 0.3s
      setTimeout(() => {
          ripple.remove();
      }, 300);

  };
};