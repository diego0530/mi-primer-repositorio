function saludo(nombre,apellido) {
    return " hola " + nombre + " " + apellido
}

console.log(saludo("juan", "Monterroza"))

function suma( numeroUno,numeroDos){
    return numeroUno + numeroDos
}

console.log(suma(3,1))


function resta(numeroUno,numeroDos){
    return numeroUno - numeroDos
}

console.log(resta(4,4))

function multiplicacion(numeroUno,numeroDos){
    return numeroUno * numeroDos
}

console.log(multiplicacion(4,4))

function division(numeroUno,numeroDos){
    return numeroUno / numeroDos
}

console.log(division(8,2))

function esMayor(numeroUno,numeroDos){
    if (numeroUno > numeroDos ){
        return numeroUno
    }else {
        return numeroDos
    }

}

console.log(esMayor(5,6))