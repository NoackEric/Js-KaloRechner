/*
Grundumsatz bei Männern (Kalorien je Tag)
66,47 + (13,7 * Körpergewicht in kg) + (5 * Körpergröße in cm) – (6,8 * Alter in Jahren) = Grundumsatz

Grundumsatz bei Frauen (Kalorien je Tag)
655,1 + (9,6 * Körpergewicht in kg) + (1,8 * Körpergröße in cm) – (4,7 * Alter in Jahren) = Grundumsatz

*/ 

 var größe = document.getElementById('height');
 var alter = document.getElementById('age');
 var gewicht = document.getElementById('weight');

//---------------------------------------- Code ohne addEventListner --------------------------------

// function rechner(){
//     let select = document.getElementById('belastung').value;
//     var rechnerFemale = 655.1 + (9.6 * gewicht.value) + (1.8 * größe.value) - (4.7 * alter.value);
//     var rechnerMale = 66.47 + (13.7 * gewicht.value) + (5 * größe.value) - (6.8 * alter.value);  
//     var checkboxes = document.getElementById("female").checked ? rechnerFemale : rechnerMale;

//     var grundumsatz =  checkboxes ;
//     var gesamtumsatz = grundumsatz * select;
//     var kilojoulGrund = grundumsatz * 4.184;
//     var kilojoulGesamt = gesamtumsatz * 4.184;

  
//     console.log(kilojoulGrund)
//     console.log(kilojoulGesamt)
//     console.log(grundumsatz)
//     console.log(gesamtumsatz)
   
//     output.innerHTML =
//     `   
//     <p>${kilojoulGrund }</p>
//     <p>${kilojoulGesamt }</p>
//     <p>${grundumsatz }</p>
//     <p>${gesamtumsatz }</p>

//     `
// }

// ---------------------------- code mit addEventListner---------------------

var submit = document.getElementById('submit');  // eventlister muss sich auf hmtl id beziehen 
 submit.addEventListener ('click', function()  { // event braucht ein "event" (click ) und die funktion
    let select = document.getElementById('belastung').value;
    var rechnerFemale = 655.1 + (9.6 * gewicht.value) + (1.8 * größe.value) - (4.7 * alter.value);
    var rechnerMale = 66.47 + (13.7 * gewicht.value) + (5 * größe.value) - (6.8 * alter.value);  
    var checkboxes = document.getElementById("female").checked ? rechnerFemale : rechnerMale;

    var grundumsatz =  checkboxes ;
    var gesamtumsatz = grundumsatz * select;
    var kilojoulGrund = grundumsatz * 4.184;
    var kilojoulGesamt = gesamtumsatz * 4.184;

  
    console.log(kilojoulGrund)
    console.log(kilojoulGesamt)
    console.log(grundumsatz)
    console.log(gesamtumsatz)
   
    output.innerHTML =
    `   
    <p>${kilojoulGrund }</p>
    <p>${kilojoulGesamt }</p>
    <p>${grundumsatz }</p>
    <p>${gesamtumsatz }</p>

    `
 })