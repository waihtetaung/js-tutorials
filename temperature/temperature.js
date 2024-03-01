const result = document.getElementById("result")
const textBox = document.getElementById("textBox")
const toCelsius = document.getElementById("toCelsius")
const toFahrenheit = document.getElementById("toFahrenheit")
let temperature

function convert(){
    if(toCelsius.checked){
        temperature = Number(textBox.value)
        temperature = (temperature - 32) * (5 / 9)
        result.textContent = temperature.toFixed(1) + "°C" 
    }else if(toFahrenheit.checked){
        temperature = Number(textBox.value)
        temperature = temperature * 9 / 5 + 32
        result.textContent = temperature.toFixed(1) + "°F" 
    }else{
        result.textContent = "Select A Unit"
    }
}