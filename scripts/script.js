let energy = 3;
let round = 1;

let newEnergy = document.getElementById('energy');

let newRound = document.getElementById('round');

let resetButton = document.getElementById('button-reset');

let newRoundButton = document.getElementById('button-new-round');

let plusEnergy = document.getElementById('button-plus-energy');

let lessEnergy = document.getElementById('button-negative-energy');

/************************************plus energy button**********************************/
plusEnergy.addEventListener('click', ()=>{
    energy = energy+1
    newEnergy.innerHTML = energy
    if (energy >= 10) {
        energy = 10;
        newEnergy.innerHTML = energy;
    };
;});
/*************************************minus energy button**************************************************/
lessEnergy.addEventListener('click', ()=>{
    energy = energy-1;
    newEnergy.innerHTML = energy;
    if (energy <= 0) {
        energy = 0;
        newEnergy.innerHTML = energy;
    };
});
/************************************new round button*****************************************/
newRoundButton.addEventListener('click', ()=>{
    round = round+1
    newRound.innerHTML = round
    energy = energy+2
    newEnergy.innerHTML = energy
    if(energy >= 10){
        energy = 10
        newEnergy.innerHTML = energy
    }
});
/************************************* reset button *********************************************/
resetButton.addEventListener('click', ()=>{
    location.reload();
});
