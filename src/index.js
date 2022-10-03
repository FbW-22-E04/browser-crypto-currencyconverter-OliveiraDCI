import "./style.css";

const form = document.querySelector("form");
const crypto = document.getElementById("crypto");
const howMany = document.getElementById("howMany");
const currency = document.getElementById("currency");
const result = document.getElementById("result");

let coin;
let money;
let icon;

let cryptoList = {};
let currencyList = {};

let myHeaders = new Headers();
myHeaders.append("apikey", "GWDeWxF5MuFErUX7ZemrKZW94n9DGpIy");

let requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

let requestOptions2 = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://api.apilayer.com/exchangerates_data/latest?symbols=GBP,EUR,USD&base=USD",
  requestOptions
)
  .then((response) => response.json())
  .then((data) => {
    currencyList = data.rates;
  })
  .catch((err) => console.log("Error", err));

fetch(
  `http://api.coinlayer.com/live?access_key=c5279ecafa950e1654ea19356de73183&symbols=BTC,ETH,LTC&target=USD`,
  requestOptions2
)
  .then((response) => response.json())
  .then((data) => {
    cryptoList = data.rates;
  })
  .catch((err) => console.log("Error", err));

//

crypto.addEventListener("change", (e) => {
  switch (crypto.value) {
    case "BTC":
      coin = cryptoList.BTC;
      break;
    case "ETH":
      coin = cryptoList.ETH;
      break;
    case "LTC":
      coin = cryptoList.LTC;
      break;
    default:
      console.log("Select crypto");
  }
});

currency.addEventListener("change", (e) => {
  switch (currency.value) {
    case "EUR":
      money = currencyList.EUR;
      icon = "€  ";
      break;
    case "GBP":
      money = currencyList.GBP;
      icon = "£  ";
      break;
    case "USD":
      money = currencyList.USD;
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
      (parseFloat(money) * parseFloat(coin)).toLocaleString(undefined, {
        maximumFractionDigits: 2,
      });
  } else if (money && coin && !Number(isNaN(howMany.value))) {
    result.value =
      `${howMany.value} ${crypto.value}  -  ` +
      icon +
      (parseFloat(money) * parseFloat(coin) * howMany.value).toLocaleString(
        undefined,
        {
          maximumFractionDigits: 2,
        }
      );
  }
});
