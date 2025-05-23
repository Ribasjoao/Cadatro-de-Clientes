// Importando as classes e funções utilitárias
import { Cliente, ClienteAPI } from "./classes.js";
import { criarElementoCliente, limparInput } from "./utils.js";

// URL base da API do CrudCrud (a mesma do seu código original)
const API_URL =
  "https://crudcrud.com/api/c61a52c6e5964577932a02dafea2688f/clientes";

// Inicializando a API de clientes
const clienteAPI = new ClienteAPI(API_URL);

// Seleciona a lista de clientes no HTML
const clientes = document.getElementById("lista-tarefas");

// Função para carregar os clientes da API
function carregarClientes() {
  clienteAPI.carregarClientes().then((listaDeClientes) => {
    // Limpa a lista antes de renderizar
    clientes.innerHTML = "";
    // Itera sobre cada cliente do array
    listaDeClientes.forEach((cliente) => {
      // Cria um novo elemento de lista para cada cliente
      const item = criarElementoCliente(cliente, removerCliente);
      // Adiciona o novo item à lista de clientes no HTML
      clientes.appendChild(item);
    });
  });
}

// Função para remover um cliente
function removerCliente(id) {
  // Usa a classe ClienteAPI para remover o cliente
  clienteAPI.removerCliente(id).then(() => {
    // Recarrega a lista de clientes
    carregarClientes();
  });
}

// Função para adicionar um novo cliente
function adicionarCliente() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;

  if (!nome || !email) {
    document.getElementById("error-message").textContent =
      "Por favor, preencha todos os campos";
    return;
  }

  clienteAPI.adicionarCliente(nome, email).then((cliente) => {
    const item = criarElementoCliente(cliente, removerCliente);
    clientes.appendChild(item);
    limparInput("nome");
    limparInput("email");
    document.getElementById("error-message").textContent = "";
  });
}

// Configurando o event listener para o botão de adicionar
document.getElementById("add").addEventListener("click", adicionarCliente);

// Exportando as funções para que possam ser acessadas globalmente
// (necessário para manter a funcionalidade dos botões de remover)
window.removerCliente = removerCliente;

// Carrega os clientes ao iniciar a aplicação
carregarClientes();
