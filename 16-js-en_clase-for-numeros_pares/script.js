
const verificar = () => {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let n3 = parseInt(document.getElementById("n3").value);
  let n4 = parseInt(document.getElementById("n4").value);

  let cantidad = 0;
  for (let i = 0; i < 4; i++) {
    let valor = eval("n" + (i + 1));
    console.log(valor);
    if (valor % 2 == 0) {
      console.log((valor = `${eval("n" + (i + 1))}`));
      console.log(cantidad++);
    }
  }
  console.log(cantidad);
  document.getElementById(
    "details"
  ).innerText = `Existe ${cantidad} números pares`;
};
