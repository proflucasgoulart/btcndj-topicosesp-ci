let clientes = {};

function encontrarCliente(CPF) {
  return clientes[CPF];
}

function criarCliente(cliente) {
  clientes[cliente.CPF] = cliente;
  return cliente;
}

function novaConsulta(CPF) {
  clientes[CPF].ultimaConsulta = new Date().getTime();
}

function limparDados() {
  clientes = {};
}

module.exports = {
  encontrarCliente,
  criarCliente,
  novaConsulta,
  limparDados,
};
