function prom() {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let n3 = parseInt(document.getElementById("n3").value);

  let suma = n1 + n2 + n3
  let prom = suma/3

  alert(`El promedio es ${prom}`)
  document.getElementById("myp").innerHTML = `El promedio es ${prom}`

}