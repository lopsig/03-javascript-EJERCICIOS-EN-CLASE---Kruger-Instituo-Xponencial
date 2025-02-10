function det() {
  let city = document.getElementById("city").value
  let country = document.getElementById("country").value

  alert(`${city} - ${country}`)
  document.getElementById("myp").innerHTML = `${city} - ${country}`; 
}