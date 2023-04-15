const nameInput = document.querySelector("input");
const buttonEnviar = document.querySelector("button");
const selectUl = document.querySelector(".names-list");

buttonEnviar.addEventListener('click',function(event){event.preventDefault()});
buttonEnviar.addEventListener('click',capturarNombres);

const nameListArray = [];

function capturarNombres() {
    let temporalName = nameInput.value; // captura el nombre 
    console.log(temporalName)

    if (nameListArray.includes(temporalName)) {
        nameInput.value = "";
        return alert(`El nombre ${temporalName} ya esta en la lista`)
    } else {
        nameListArray.push(temporalName);
        let temporalLi = document.createElement("li"); // crea el elemento li
        temporalLi.textContent = temporalName; //agrega el nombre al li
        selectUl.appendChild(temporalLi); // agrega el li con el nombre al ul en html
        nameInput.value = "";
        return
    }

}

