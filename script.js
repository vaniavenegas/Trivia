var saludFisica = document.getElementById("salud_fisica_btn");
var saludMental = document.getElementById("salud_mental_btn");
var saludoInicial = document.getElementById("saludo_usuario");
var usuario = prompt ("¿Cuál es tu nombre?");

function irASaludFisica()
{
  window.location.href = "salud-fisica.html"
}

function irASaludMental() 
{
  window.location.href = "salud-mental.html"
}

saludoInicial.innerHTML = saludoInicial.textContent + usuario + "!";

saludFisica.addEventListener("click", irASaludFisica);
saludMental.addEventListener("click", irASaludMental);

alert('Bienvenido ' + usuario + ", escoge la categoría que quieres jugar");