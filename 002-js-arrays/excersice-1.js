// 3. crear nuevo array desde uno existente
const oldArray = [ 83, 63, 91, 6, 33, 89, 88, 98, 21, 52 ];

const newArray = oldArray.slice()
console.log(newArray)





// 2. rellena un array con numeros aleatorios.
const randomArray = [];

for (i = 0; i < 10; i++) {
  randomArray.push(Math.floor(Math.random() * 100));
}

console.log(randomArray)






// 1. rellena un array con los numeros del 1 al 10
const unoDiezArray = [];

for (i = 1; i <= 10; i++) {
    unoDiezArray.push(i)
}

console.log(unoDiezArray)