const array1 = [{ name: "Juan", age: 25 }, { name: "Pedro", age: 30 }, { name: "Maria", age: 28 }, { name: "Jose", age: 32 }, { name: "Luis", age: 27 }, { name: "Ana", age: 29 }, { name: "Pablo", age: 31 }, { name: "Laura", age: 26 }, { name: "Sofia", age: 24 }, { name: "Rosa", age: 33 }];

























function showOriginalArray(array) {
    const originalArrayDiv = document.querySelector(".originalArray");
    for (i in array) {
        let newElement = document.createElement("p");
        newElement.innerHTML = `${i} - ${array[i].age}`;
        originalArrayDiv.appendChild(newElement);
    }
}
showOriginalArray(array1);

function showModArray (arraymod) {
    const modArrayDiv = document.querySelector(".modArray");
    console.log(typeof(arraymod));
    
    if (typeof(arraymod) === "object") {
        for (let i = 0; i < arraymod.length; i++) {
            let temporalElement = document.createElement("p");
            temporalElement.innerHTML = arraymod.indexOf(arraymod[i]) + " - " + arraymod[i];
            modArrayDiv.appendChild(temporalElement)
        }
    } else {
        let temporalElement = document.createElement("p");
        temporalElement.innerHTML = arraymod;
        modArrayDiv.appendChild(temporalElement)
    }
}
showModArray(array2)