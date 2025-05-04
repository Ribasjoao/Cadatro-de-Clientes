export function criarElementoCliente(cliente, removerCallback) {
  const item = document.createElement("li");
  item.innerHTML = `${cliente.nome} <button id="btn-${cliente._id}">X</button>`;

  // Adiciona o event listener no botão após criar o elemento
  setTimeout(() => {
    const botao = document.getElementById(`btn-${cliente._id}`);
    if (botao) {
      botao.addEventListener("click", () => removerCallback(cliente._id));
    }
  }, 0);

  return item;
}

// Função para limpar o input
export function limparInput(inputId) {
  document.getElementById(inputId).value = "";
}
