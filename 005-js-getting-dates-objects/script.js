const pedidosList = [];

const customerName = document.querySelector("#name")
const customerNumber = document.querySelector("#number")
const customerEmail = document.querySelector("#email")
const button = document.querySelector(".btn")


button.addEventListener('click', addPedidio)

function addPedidio(event) {
    event.preventDefault()

    let tempInfo = {};

    //informacion, agregando a object tempInfo
    tempInfo.name = customerName.value;
    tempInfo.number = customerNumber.value;
    tempInfo.email = customerEmail.value;

    // sabores
    const saborVainilla = document.querySelector("#vainilla")
    const saborChocolate = document.querySelector("#chocolate")
    const saborMixto = document.querySelector("#mixto")

    switch (true) {
        case (saborVainilla.checked): tempInfo.sabor = saborVainilla.value;
        break
        case (saborChocolate.checked): tempInfo.sabor = saborChocolate.value;
        break
        case (saborMixto.checked): tempInfo.sabor = saborMixto.value;
        break
    }

    // recipiente
    const reciCopa = document.querySelector("#copa");
    const reciTarrina = document.querySelector("#tarrina");

    switch (true) {
        case (reciCopa.checked): tempInfo.recipiente = reciCopa.value;
        break;
        case (reciTarrina.checked): tempInfo.recipiente = reciTarrina.value;
        break;
    }

    // extras
    const extraCaramelo = document.querySelector("#caramelo");
    const extraKitkat = document.querySelector("#kitkat");
    const extraChocolate = document.querySelector("#chocolateextra");
    tempInfo.extra = [];

    console.log("caramelo" + extraCaramelo.checked)
    console.log("kikat" + extraKitkat.checked)
    console.log("chocolate" + extraChocolate.checked)

    if (extraCaramelo.checked) {
        tempInfo.extra.push(extraCaramelo.value);
    }

    if (extraKitkat.checked) {
        tempInfo.extra.push(extraKitkat.value);
    }

    if (extraChocolate.checked) {
        tempInfo.extra.push(extraChocolate.value);
    }

    // reset opciones
    customerName.value = "";
    customerNumber.value = "";
    customerEmail.value = "";

    saborVainilla.checked = true
    saborChocolate.checked = false
    saborMixto.checked = false

    reciCopa.checked = true;
    reciTarrina.checked = false;

    extraCaramelo.checked = false;
    extraKitkat.checked = false;
    extraChocolate.checked = false;

    pedidosList.push(tempInfo)
    console.log(pedidosList)

    tempInfo = {};

}


// function imprimir en tabla
const showButton = document.querySelector(".btn-print");
const tableBody = document.querySelector(".table-body")
const tableContainer = document.querySelector(".table-container")


showButton.addEventListener('click', printTable);

function printTable (event) {
    event.preventDefault();
    tableContainer.classList.remove('inactive');

    
    for (i of pedidosList) {
        let tempTR = document.createElement('tr');

        for (e in i) {
            let tempTD = document.createElement('td')
            tempTD.innerHTML = i[e];
            tempTR.appendChild(tempTD)
        }


        tableBody.appendChild(tempTR);
    }
    

}
