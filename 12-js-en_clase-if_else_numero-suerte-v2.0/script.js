const suerte = () => {
  let numero = prompt("Ingresa un número entre 1 y 999 para participar");

  if (numero == 777) {
    document.getElementById("details").innerHTML = "¡FELICIDADES GANASTE! \n¡$1 000 000!"
    document.getElementById("details").style.color = "blue"
    document.getElementById("details").style.backgroundColor = "yellow"
    document.getElementById("details").style.border = "1px solid green"
    document.getElementById("details").style.textAlign = "center" 
  }
  else if (numero <= 0 || numero > 999) {
    document.getElementById("details").innerHTML = "Número Inválido,elige un número entre 1 y 999"
    document.getElementById("details").style.color = "red"
    document.getElementById("details").style.backgroundColor = "white"
    document.getElementById("details").style.border = "3px dotted black"
    document.getElementById("details").style.textAlign = "center"
  }
  else {
    document.getElementById("details").innerHTML = "Suerte para la próxima"
    document.getElementById("details").style.color = "yellow"
    document.getElementById("details").style.backgroundColor = "black"
    document.getElementById("details").style.border = "5px solid red"
    document.getElementById("details").style.textAlign = "center" 
  }
  
}
