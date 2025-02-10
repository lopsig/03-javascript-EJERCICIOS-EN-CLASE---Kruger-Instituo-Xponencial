const numeroMayor = () => {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);

  if (n1 > n2) {
    window.alert(`El número ${n1} es el mayor`)
  } else {
    alert(`El número ${n2} es el mayor`)
  }
}