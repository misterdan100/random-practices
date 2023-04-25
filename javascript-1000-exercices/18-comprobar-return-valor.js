function funcion1(){
    return;
}

function funcion2(){
    const A = 3;
}

function funcion3(){
    return 2+2;
}

function funcion4(){
    return true;
}

function funcion5(){
    return {};
}

console.log(funcion1())

if (funcion1() === undefined) {
    console.log("La funcion no retorna nada")
} else {
    console.log("La funcion retorna algo")

}