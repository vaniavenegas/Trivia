document.getElementById("volverJugar").style.display = "none";
document.getElementById("irSaludFisica").style.display = "none";

function mostrarPregunta2() {
  document.getElementById("pregunta1").style.display = "none";
  document.getElementById("pregunta2").style.display = "block";
}

function mostrarPregunta3() {
  document.getElementById("pregunta2").style.display = "none";
  document.getElementById("pregunta3").style.display = "block";
}

function procesarTrivia() {
  var correcta1 = document.getElementById("pregunta1_c").checked;
  var correcta2 = document.getElementById("pregunta2_b").checked;
  var correcta3 = document.getElementById("pregunta3_a").checked;
  var puntaje = 0;

  if (correcta1 == true) {
      puntaje = puntaje + 1;
  }

  if (correcta2 == true) {
      puntaje = puntaje + 1;
  }

  if (correcta3 == true) {
      puntaje = puntaje + 1;
  }

  alert("Respuestas correctas =  " + puntaje);

  document.getElementById("volverJugar").style.display = "block";
  document.getElementById("irSaludFisica").style.display = "block";
}