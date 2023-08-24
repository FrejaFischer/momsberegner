"use strict";

function momsCalc(price, moms = 25) {
  let result = price + (price * moms) / 100;
  console.log(result);
  return result;
}

document.querySelector("button").addEventListener("click", run);
document.querySelector("button").addEventListener("key", run);

function run() {
  const inputNumb = document.getElementById("priceNumb").value;
  const newInputNumb = parseInt(inputNumb);
  momsCalc(newInputNumb);
  const finalPrice = momsCalc(newInputNumb);

  document.getElementById("yourPrice").textContent = finalPrice;
}
