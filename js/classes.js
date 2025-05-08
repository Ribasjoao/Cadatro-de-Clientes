// Classe que representa um cliente/tarefa
export class Cliente {
  constructor(id, nome, email) {
    this._id = id;
    this.nome = nome;
    this.email = email;
  }
}

// Classe para gerenciar as operações com a API
export class ClienteAPI {
  constructor(apiURL) {
    this.API_URL = apiURL;
  }

  // Método para carregar clientes da API
  carregarClientes() {
    return fetch(this.API_URL).then((resposta) => resposta.json());
  }

  // Método para adicionar um cliente
  adicionarCliente(nome, email) {
    return fetch(this.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome, email }),
    }).then((resposta) => resposta.json());
  }

  // Método para remover um cliente
  removerCliente(id) {
    return fetch(`${this.API_URL}/${id}`, {
      method: "DELETE",
    });
  }
}
