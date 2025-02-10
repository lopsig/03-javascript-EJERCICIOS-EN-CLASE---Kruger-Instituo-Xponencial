const addNumber = () => {
  
  let n1 = parseInt(document.getElementById("n1").value)
  let n2 = parseInt(document.getElementById("n2").value)
  let n3 = parseInt(document.getElementById("n3").value)
  let n4 = parseInt(document.getElementById("n4").value)
  let n5 = parseInt(document.getElementById("n5").value)
  
  let arr = []
  for (let i = 0; i < 5; i++) {
    arr.push(eval("n" + (i + 1)));
    console.log(arr);
  }
  
  document.getElementById("numbers").innerHTML = arr
  console.log(typeof (arr))

}