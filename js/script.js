let operacionSeleccionada = ""; 

function setOperacion(op) {
    operacionSeleccionada = op;
}

function calcular() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result;

    switch(operacionSeleccionada) {
        case "sum":
            result = number1 + number2;
            break;
        case "subtract":
            result = number1 - number2;
            break;
        case "multiply":
            result = number1 * number2;
            break;
        case "divide":
            result = number1 / number2;
            break;
        case "sqrt":
            result = Math.sqrt(number1);
            break;
        default:
            result = "Operación no válida";
            break;
    }

    document.getElementById('resultado').value = result;
}