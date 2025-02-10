const suma = () => {
  let n1 = parseInt(prompt("Ingresa el primer número: "));

  let n2 = parseInt(prompt("Ingresa el segundo número: "));

  let suma = n1 + n2;
  console.log(typeof suma);
  console.log(suma);

  if (suma > 100) {
    const details = document.getElementById("details");
    details.innerHTML = `La suma de los número es ${suma}`;
    details.style.color = "blue";
  } else {
    details.innerHTML = `La suma de los número es ${suma}`;
    details.style.color = "red";
  }
};
