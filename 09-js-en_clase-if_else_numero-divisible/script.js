const verificar = () => {
  let n1 = parseInt(document.getElementById("n1").value);

  if (n1 % 2 == 0) {
    alert(`El número ${n1} es divisible para 2`)
  } else {
    alert(`El número ${n1} NO es divisible para 2`)
  }
}