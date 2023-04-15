const cantNumbers = document.querySelector("input");
const generarButton = document.querySelector("button");
const selectUl = document.querySelector(".names-list");

generarButton.addEventListener('click',function(event){event.preventDefault()});
generarButton.addEventListener('click', printNumbers);


const numbersArray = [];
function  numbersGenerator() {
    let temporalValue = cantNumbers.value; // captura cantidad de numeros a generar
    console.log(temporalValue)
    
    for (i = 0; i < temporalValue; i++) {
        let temporalNumber = Math.floor(Math.random() * 100)
        numbersArray.push(temporalNumber)
    }    
    numbersArray.sort((a, b) => a - b)
}

function printNumbers () {
    numbersGenerator()

    for (i of numbersArray) {
        let temporalLi = document.createElement("li")
        temporalLi.innerHTML = i;
        selectUl.appendChild(temporalLi)
        cantNumbers.value = "";
    }
    

}


// if (numbersArray.includes(temporalValue)) {
//     cantNumbers.value = "";
//     return alert(`El nombre ${temporalValue} ya esta en la lista`)
// } else {
//     numbersArray.push(temporalValue);
//     let temporalLi = document.createElement("li"); // crea el elemento li
//     temporalLi.textContent = temporalValue; //agrega el nombre al li
//     selectUl.appendChild(temporalLi); // agrega el li con el nombre al ul en html
//     cantNumbers.value = "";
//     return
// }
