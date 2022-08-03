
const celResult = document.querySelector(".celresult")
const fahResult = document.querySelector(".fahresult")


//Converting celciusTofahrenheit
function celciusTofahrenheit(cToFahr){
    cToFahr = parseFloat(cToFahr);
    fahResult.value =(cToFahr * 1.8) + 32;
}

// converting  fahrenheitTocelsius
function fahrenheitTocelsius(fToCel){
    fToCel = parseFloat(fToCel);
    celResult.value = (fToCel - 32) / 1.8 
}