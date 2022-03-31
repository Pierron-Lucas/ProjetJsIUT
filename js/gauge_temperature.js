const gaugeElement = document.querySelector(".gauge");
var A_temperatures = [];
var GaugeMaxValue = 51;
var color_result = "#3d7e29";
var color_min = "#00f2ff";
var color_medium = "#ff8600";
var color_maxi = "#ff0000";
var value = 0;


function getRandomArbitrary(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function setGaugeValue(gauge, value){
    if (value < 0 || value > 1 ){
        return;
    }

    gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 2}turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${Math.round(value * 100)}`;
}

setGaugeValue(gaugeElement, 0.8);