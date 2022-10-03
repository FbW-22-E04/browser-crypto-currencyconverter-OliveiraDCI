import "./style.css";

const form = document.querySelector("form");
const crypto = document.getElementById("crypto");
const howMany = document.getElementById("howMany");
const currency = document.getElementById("currency");
const result = document.getElementById("result");

let coin;
let money;
let icon;

const cryptoPrice = {
  BTC: 20000,
  ETH: 1300,
  LTC: 400,
};

const currencyPrice = {
  USD: 1,
  GBP: 1,
  EUR: 1,
};

crypto.addEventListener("change", (e) => {
  switch (crypto.value) {
    case "BTC":
      coin = cryptoPrice.BTC;

      break;
    case "ETH":
      coin = cryptoPrice.ETH;
      break;
    case "LTC":
      coin = cryptoPrice.LTC;
      break;
    default:
      console.log("Select crypto");
  }
});

currency.addEventListener("change", (e) => {
  switch (currency.value) {
    case "EUR":
      money = currencyPrice.EUR;
      icon = "€  ";
      break;
    case "GBP":
      money = currencyPrice.GBP;
      icon = "£  ";
      break;
    case "USD":
      money = currencyPrice.USD;
      icon = "$  ";
      break;
    default:
      console.log("Select currency");
  }
});

form.addEventListener("change", () => {
  if (Number(isNaN(howMany.value))) {
    alert("Please enter only numbers.");
    howMany.value = "";
  } else if (money && coin && !howMany.value) {
    result.value =
      `1 ${crypto.value}  -  ` +
      icon +
      (parseInt(money) * parseInt(coin)).toFixed(2);
  } else if (money && coin && !Number(isNaN(howMany.value))) {
    result.value =
      `${howMany.value} ${crypto.value}  -  ` +
      icon +
      (parseInt(money) * parseInt(coin) * howMany.value).toFixed(2);
  }
});
