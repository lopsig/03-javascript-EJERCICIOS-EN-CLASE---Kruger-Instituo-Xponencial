const details = document.getElementById("details");
details.style.width = "10px";
details.style.height = "70px";

const enlarge = () => {
  const anchoActual = parseInt(window.getComputedStyle(details).width);

  const nuevoAncho = anchoActual + 10;
  details.style.width = nuevoAncho + "px";

  if (nuevoAncho > 500) {
    details.style.backgroundColor = "brown";
  } else {
    details.style.backgroundColor = "blue";
  }
};

const reset = () => {
  const details = document.getElementById("details");
  details.style.width = "10px";
  details.style.backgroundColor = "yellow";
};
