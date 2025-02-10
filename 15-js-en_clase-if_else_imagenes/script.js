const mostrarImagen = () => {
  let n1 = parseInt(prompt("Ingresa un número: "));

  const a1 = document.getElementById("a1");
  const a2 = document.getElementById("a2");
  const a3 = document.getElementById("a3");

  if (n1 < 100) {
    a1.style.display ="block"
    a2.style.display ="block"
    a3.style.display ="block"
  } else if (n1 == 100) {
    a1.style.display = "block";
    a2.style.display = "block";
    a3.style.display = "none";
  } else if (n1 > 100) {
    a1.style.display = "block";    
    a2.style.display = "none";    
    a3.style.display = "none";    
  }

}