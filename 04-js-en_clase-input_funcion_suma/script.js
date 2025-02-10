function suma() {
  let n1 = parseInt(document.getElementById("n1").value)
  let n2 = parseInt(document.getElementById("n2").value)
  let sumar = n1 + n2

  alert(`La suma de los valores es ${sumar}`)
  document.getElementById("myp").innerHTML = `La suma de los valores es ${sumar}`

  console.log(sumar);
}

