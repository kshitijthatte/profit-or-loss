const initialPrice = document.querySelector("#initial-price");
const quantity = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit");
const result = document.querySelector("#result");

const calculateProfitAndLoss = (initial, quantity, current) => {
  if (initial > current) {
    const loss = (initial - current) * quantity;
    const lossPercentage = (loss / initial) * 100;
    result.style.color = "#DC2626";
    result.innerText = `Whoops!! Your loss is ${loss} and loss Percentage is ${lossPercentage} % :(`;
  } else if (current > initial) {
    const profit = (current - initial) * quantity;
    const profitPercentage = (profit / initial) * 100;
    result.style.color = "#064E3B";
    result.innerText = `Yay!! Your Profit is ${profit} and profit Percentage is ${profitPercentage}%`;
  } else {
    result.innerText = "No pain No gain, and no gain no pain :)";
  }
};

submitBtn.addEventListener("click", () => {
  if (initialPrice.value && quantity.value && currentPrice.value) {
    calculateProfitAndLoss(
      Number(initialPrice.value),
      Number(quantity.value),
      Number(currentPrice.value)
    );
  } else {
    result.innerText = "Please fill out all Fields";
  }
});
