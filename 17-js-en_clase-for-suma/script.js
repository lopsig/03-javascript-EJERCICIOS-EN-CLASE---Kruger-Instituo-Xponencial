const suma = () => {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let n3 = parseInt(document.getElementById("n3").value);
  let n4 = parseInt(document.getElementById("n4").value);
  let n5 = parseInt(document.getElementById("n5").value);

  let resultado = 0;
  for (let i = 0; i < 5; i++) {
    resultado += eval("n" + (i + 1));
    console.log(resultado);
  }

  document.getElementById("sum").innerText = `La suma de los 5 números ingresados es = ${resultado}`
};
