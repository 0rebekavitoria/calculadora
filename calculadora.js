/**
 * Calculadora Simples
 * Realiza operações básicas de matemática
 */

// ===== Funções Principais =====

/**
 * Realiza a operação matemática solicitada
 * @param {string} operacao - A operação a ser realizada (+, -, *, /)
 */
function calcular(operacao) {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultado = document.getElementById("resultado");

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  // Validação
  if (!validarEntradas(num1, num2, resultado)) {
    return;
  }

  // Calcular resultado
  const total = executarOperacao(operacao, num1, num2, resultado);

  if (total !== null) {
    exibirResultado(resultado, total);
  }
}

/**
 * Limpa todos os campos da calculadora
 */
function limparCampos() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("resultado").innerHTML = "Resultado: --";
}

// ===== Funções Auxiliares =====

/**
 * Valida se os campos estão preenchidos corretamente
 */
function validarEntradas(num1, num2, elemento) {
  if (isNaN(num1) || isNaN(num2)) {
    elemento.innerHTML = "⚠️ Informe dois números válidos";
    return false;
  }
  return true;
}

/**
 * Executa a operação matemática
 */
function executarOperacao(operacao, num1, num2, elemento) {
  switch (operacao) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      if (num2 === 0) {
        elemento.innerHTML = "❌ Não é possível dividir por zero";
        return null;
      }
      return num1 / num2;

    default:
      elemento.innerHTML = "❌ Operação inválida";
      return null;
  }
}

/**
 * Exibe o resultado formatado
 */
function exibirResultado(elemento, total) {
  const resultado = Math.round(total * 100) / 100;
  elemento.innerHTML = `✓ ${resultado}`;
}