function calc() {
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);
  var operador = document.getElementById("operador").value;
  var resultado;

  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        resultado = "Erro na conta por 0";
      }
      break;
    default:
      resultado = "Operador invalido";
      break;
  }

  if (resultado !== "Erro na conta por 0") {
    document.getElementById("resultado").textContent = format(resultado);
  } else {
    document.getElementById("resultado").textContent = resultado;
  }
}

const format = (resultado) => Number.isInteger(resultado) ? resultado : resultado.toFixed(2);
