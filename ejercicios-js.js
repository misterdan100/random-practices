const vectorPrueba = [3, 5, 8, 1, 2, 9, 10, 11];
// const vectorPrueba = [3, 8, 5];
const vectorPrueba2 = [3, 5, 8];
console.log(vectorPrueba2[3] == undefined)

function calcular2Mayor (array) {
    let arrayOrdenado = [];
    arrayOrdenado.push(array[0]);
    // console.log(arrayOrdenado);
    
    for (i = 1; i < array.length; i++) {
        // console.log(array[i])
        // console.log(arrayOrdenado[0])
        
        if (array[i] > arrayOrdenado[0]) { // comprobando que sea mayor que el primer en ordenados
            for (e = 0; e < (arrayOrdenado.length); e++) {
                let posicionSiguiente = e + 1;
                // console.log(arrayOrdenado.length)
                // console.log(array[i])
                // console.log(arrayOrdenado[e])
                // console.log(arrayOrdenado[e+1])
                // console.log(e+1)
                // console.log(posicionSiguiente)
                // console.log(arrayOrdenado[posicionSiguiente])

                if (array[i] > arrayOrdenado[e] && arrayOrdenado[posicionSiguiente] == undefined) {
                    // console.log(arrayOrdenado[e])
                    // console.log(array[i])
                    // console.log(arrayOrdenado)
                    // console.log(arrayOrdenado[e])
                    arrayOrdenado.push(array[i])
                    
                } else if (array[i] > arrayOrdenado[e] && array[i] < arrayOrdenado[posicionSiguiente]) {
                    arrayOrdenado.splice(posicionSiguiente,0,array[i])
                } 
            }

        } else {
            arrayOrdenado.unshift(array[i])
            // console.log(arrayOrdenado)
        }
    } 
    

    return arrayOrdenado
}

console.log(calcular2Mayor(vectorPrueba))