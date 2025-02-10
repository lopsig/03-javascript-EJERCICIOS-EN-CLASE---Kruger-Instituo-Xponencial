const suerte = () => {
  let n1 = document.getElementById("n1").value;

  if (n1 == 7) {
    alert("¡FELICIDADES GANASTE! \n$1 000 000");

  } else if (n1 > 10) {
    alert("Solo puedes ingresar números entre el 1 y el 10")

  } else if (n1 <= 0) {
    alert("Número inválido")

  } else {
    alert("Suerte para la próxima")
  }
}