import "./style.css";

const form = document.querySelector("form");
const crypto = document.getElementById("crypto");
const howMany = document.getElementById("howMany");
const currency = document.getElementById("currency");
const result = document.getElementById("result");

// Example query (response.jason)
/**
- DCI -> {"data":{"base":"LTC","currency":"EUR", amount":"53.58"}}
- Coinbase -> {"data":{"amount": "1015.00", "currency": "USD"}}
 */

/**
 * Example request from Coinbase:

var Client = require('coinbase').Client;
var client = new Client({'apiKey': 'API KEY',
                         'apiSecret': 'API SECRET'});

client.getSpotPrice({'currencyPair': 'BTC-USD'}, function(err, price) {
  console.log(price);
});

 * Example response:

{
  "data": {
    "amount": "1015.00",
    "currency": "USD"
  }
}
 */

const cryptoPrice = {
  BTC: 20000,
  ETH: 3000,
  LTC: 300,
};

const currencyPrice = {
  USD: 2,
  GBP: 3,
  EUR: 4,
};

let coin;
let money;

crypto.addEventListener("change", (e) => {
  switch (crypto.value) {
    case "BTC":
      coin = cryptoPrice.BTC;
      console.log(coin);
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
      console.log(money);
      break;
    case "GBP":
      money = currencyPrice.GBP;
      break;
    case "USD":
      money = currencyPrice.USD;
      break;
    default:
      console.log("Select currency");
  }
});

form.addEventListener("change", () => {
  let icon;
  switch (currency.value) {
    case "EUR":
      icon = "€  ";
      break;
    case "GBP":
      icon = "£  ";
      break;
    case "USD":
      icon = "$  ";
  }

  if (Number(isNaN(howMany.value))) {
    alert("Please enter only numbers.");
    howMany.value = "";
  } else if (money && coin && !howMany.value) {
    result.value =
      `1 ${crypto.value}  -  ` +
      icon +
      Number(parseInt(money) * parseInt(coin)).toLocaleString();
  } else if (money && coin && !Number(isNaN(howMany.value))) {
    result.value =
      `${howMany.value} ${crypto.value}  -  ` +
      icon +
      Number(parseInt(money) * parseInt(coin) * howMany.value).toLocaleString();
  }
});
