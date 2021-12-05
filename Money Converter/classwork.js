let output = document.getElementById("output");
output.style.visibility = "hidden";
let currencyInput = document.getElementById("currencyInput");
// console.log(currencyInput);
currencyInput.addEventListener("input", (e) => {
  // console.log(e.target.value);
  let inputValue = e.target.value;
  if (inputValue > 0) {
    output.style.visibility = "visible";
    let rubl = document.getElementById("rublOutput");
    let dollar = document.getElementById("dollarOutput");
    let euro = document.getElementById("euroOutput");
    let yuan = document.getElementById("yuanOutput");
    rubl.innerHTML = Math.floor((inputValue / 148) * 100) / 100;
    dollar.innerHTML = Math.floor((inputValue / 1085) * 100) / 100;
    euro.innerHTML = Math.floor((inputValue / 1205) * 100) / 100;
    yuan.innerHTML = Math.floor((inputValue / 35) * 100) / 100;
  } else {
    alert("Noldan farqli musbat son kiriting");
    let current = document.getElementById("currencyInput");
    current.value = "";
    output.style.visibility = "hidden";
  }
});
