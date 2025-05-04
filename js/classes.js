// Classe que representa um cliente/tarefa
export class cliente {
  constructor(id, nome) {
    this._id = id;
    this.nome = nome;
  }
}

// Classe para gerenciar as operações com a API
export class ClienteAPI {
  constructor(apiURL) {
    this.API_URL = apiURL;
  }

  // Método para carregar clientes da API
  carregarCliente() {
    return fetch(this.API_URL).then((resposta) => resposta.json());
  }

  // Método para adicionar um cliente
  adicionarCliente(nome) {
    return fetch(this.API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: nome }),
    }).then((resposta) => resposta.json());
  }

  // Método para remover um cliente
  removerCliente(id) {
    return fetch(`${this.API_URL}/${id}`, {
      method: "DELETE",
    });
  }
}
