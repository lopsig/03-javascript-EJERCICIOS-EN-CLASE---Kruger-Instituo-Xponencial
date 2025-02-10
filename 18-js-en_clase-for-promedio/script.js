const calculos = () => {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let n3 = parseInt(document.getElementById("n3").value);
  let n4 = parseInt(document.getElementById("n4").value);
  let n5 = parseInt(document.getElementById("n5").value);

  let suma = 0;
  let average = 0;
  let above = 0;
  let denominador = 0;

  for (let i = 0; i < 5; i++) {
    let nsalario = eval("n" + (i + 1));
    suma += nsalario;
    console.log(suma);
    denominador++;

    if (nsalario > 1000) {
      above++;
    }
  }

  average = suma / denominador++;

  document.getElementById(
    "sum"
  ).innerText = `La suma de los salarios es: $${suma}`;
  document.getElementById(
    "average"
  ).innerText = `El promedio de salarios es: $${average}`;
  document.getElementById(
    "above"
  ).innerText = `La cantidad de salarios que superan los $1000 es: ${above}`;
};
