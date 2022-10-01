"use strict"

const apiUrl = "https://api.coinbase.com/v2/prices"
const entryField = document.querySelector(".entryField")
const outputField = document.querySelector(".outputField")
const form = document.querySelector("#conversion-form")
const input = document.querySelector("#cryptoInput")
const output = document.querySelector("#cryptoOutput")
const inputAmount = document.querySelector("#cryptoInput")

const convert = async () => {
  const url = `${apiUrl}/${entryField.value}-${outputField.value}/spot`
  console.log(url)

  const response = await fetch(url)
  const result = await response.json()
  output.value = (Number(result.data.amount) * input.value).toFixed(2)
}

form.addEventListener("submit", e => {
  e.preventDefault()
  convert()
})
