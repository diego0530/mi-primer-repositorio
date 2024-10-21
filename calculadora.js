function calculadora (operacion,numeroUno,numeroDos) {
    if (operacion == "suma") {
        return numeroUno + numeroDos
    } else if (operacion == "resta") {
        return numeroUno - numeroDos
    } else if (operacion == "multiplicacion") {
        return numeroUno * numeroDos
    } else if (operacion == "division") {
        return numeroUno / numeroDos
    } else {
        return error
    }
}

console.log(calculadora("division",6,2 ))