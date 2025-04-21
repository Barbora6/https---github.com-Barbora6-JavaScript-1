const btnEl = document.getElementById("calculate");
const inputBill = document.getElementById("bill");
const inputTip = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = inputBill.value;
  const tipValue = inputTip.value;
  const totalValue = billValue * (1 + tipValue / 100);
  totalSpan.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
