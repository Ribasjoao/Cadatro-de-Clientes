// Seleciona a nossa ul com a lista de clientes no HTML
const clientes = document.getElementById("lista-tarefas");

// URL base da API do CrudCrud (substitua pela sua chave única)
const API_URL = "https://crudcrud.com/api/cea78fe0f2154430878361753fb30630/clientes";

// Função para carregar os clientes da API
function carregarClientes() {
    fetch(API_URL)
        .then(resposta => resposta.json()) // Converte o corpo da resposta em JSON
        .then((listaDeClientes) => {
            // Limpa a lista antes de renderizar
            clientes.innerHTML = "";
            // Itera sobre cada cliente do array
            listaDeClientes.forEach(cliente => {
                // Cria um novo elemento de lista (<li>) para cada cliente
                const item = document.createElement("li");
                // Define o conteúdo HTML do item, incluindo nome e botão
                item.innerHTML = `${cliente.nome} <button onclick="removerCliente('${cliente._id}')">X</button>`;
                // Adiciona o novo item à lista de clientes no HTML
                clientes.appendChild(item);
            });
        });
}

// Função para adicionar um novo cliente
document.getElementById("add").addEventListener("click", () => {
    // Pega o nome que o usuário adicionou no input com ID tarefa
    const nome = document.getElementById("tarefa").value;

    // Faz uma requisição POST para a API para criar o cliente
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome: nome }) // Envia o nome do cliente
    })
        .then(resposta => resposta.json())
        .then((cliente) => {
            // Cria um novo elemento de lista (<li>) para o cliente adicionado
            const item = document.createElement("li");
            item.innerHTML = `${cliente.nome} <button onclick="removerCliente('${cliente._id}')">X</button>`;
            clientes.appendChild(item);
        });

    // Limpa o campo de input
    document.getElementById("tarefa").value = "";
});

// Função para remover um cliente
function removerCliente(id) {
    // Faz uma requisição DELETE para a API para remover o cliente
    fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    })
        .then(() => {
            // Remove o cliente da lista no HTML
            carregarClientes();
        });
}

// Carrega os clientes ao iniciar a aplicação
carregarClientes();

