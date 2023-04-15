// // Import our custom CSS
// import '../scss/styles.scss'

// // Import all of Bootstrap's JS
// import * as bootstrap from 'bootstrap'

const inputName = document.querySelector(".input-name");
const inputAge = document.querySelector(".input-age");
const buttonAdd = document.querySelector(".button-add");
let tableBody = document.querySelector(".table-body");

buttonAdd.addEventListener('click', namesAdd)

function namesAdd(event) {
    event.preventDefault() // para prevenir recargar la pagina
    let inputValueName = inputName.value;
    let inputValueAge = inputAge.value;
    
    let tempTagName = "<td>" + inputValueName + "</td>"
    let tempTagAge = "<td>" + inputValueAge + "</td>"

    let tempTR = "<tr>" + tempTagName + tempTagAge + "</tr>"

    tableBody.innerHTML += tempTR;

    inputName.value = ""
    inputAge.value = ""




    // let tempName = document.createElement("td")
    // tempName.textContent = inputName.value

    // let tempAge = document.createElement("td");
    // tempAge.textContent = inputAge.value

    // let tempTR = document.createElement("tr");
    // tempTR.appendChild(tempName)
    // tempTR.appendChild(tempAge)
    // tableBody.appendChild(tempTR)
    // inputName.value = ""
    // inputAge.value = ""
}

