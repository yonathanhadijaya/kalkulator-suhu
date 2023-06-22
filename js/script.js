var celcius = 0;
var fahrenheit = 0;

function CtoF(celcius) {
  //rumus
  celcius = document.querySelector(".celcius").querySelector("input").value;
  fahrenheit = (celcius * 9) / 5 + 32;
  console.log(fahrenheit);

  document.querySelector(".fahrenheit").querySelector("input").value =
    fahrenheit;
  document.querySelector(".rumus").querySelector("p").innerHTML =
    celcius + "C * 9/5 + 32 = " + fahrenheit + "F";

  //update display suhu di bagian kanan
  document.querySelector(".suhu").querySelector("h1").innerHTML =
    fahrenheit + " F";
}

function FtoC(fahrenheit) {
  //rumus
  fahrenheit = document
    .querySelector(".fahrenheit")
    .querySelector("input").value;
  celcius = ((fahrenheit - 32) * 5) / 9;
  console.log(fahrenheit);
  document.querySelector(".celcius").querySelector("input").value = celcius;
  document.querySelector(".rumus").querySelector("p").innerHTML =
    fahrenheit + "F - 32 * 5/9 = " + celcius + "C";

  //update display suhu di bagian kanan
  document.querySelector(".suhu").querySelector("h1").innerHTML =
    celcius + " C";
}

function reset() {
  document.querySelector(".celcius").querySelector("input").value = "0";
  document.querySelector(".fahrenheit").querySelector("input").value = "0";
  document.querySelector(".rumus").querySelector("p").innerHTML = "";
  document.querySelector(".suhu").querySelector("h1").innerHTML = "";
}

function showCelcius() {
  document.querySelector(".celcius").querySelector(".action").style.display =
    "inline";
  document.querySelector(".fahrenheit").querySelector(".action").style.display =
    "none";
}
function showFahrenheit() {
  document.querySelector(".fahrenheit").querySelector(".action").style.display =
    "inline";
  document.querySelector(".celcius").querySelector(".action").style.display =
    "none";
}

//debugging

// function btn() {
//   console.log(celcius);
// }

// function getValue() {
//   console.log(document.querySelector(".celcius").value);
// }
