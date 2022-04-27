const calculaValor = require('./calcula-valor');

const mockdb = require('./mockdb');

const juros = 0.025;

const consultar = async (nome, CPF, valor, parcelas) => {
  let cliente = mockdb.encontrarCliente(CPF);

  if (cliente == null) {
    cliente = mockdb.criarCliente({
      Nome: nome,
      CPF,
    });
  }

  if (cliente.ultimaConsulta) {
    const diferenca = Math.abs(cliente.ultimaConsulta - new Date().getTime());
    const diferencaDias = Math.round(diferenca / (1000 * 60 * 60 * 24));

    if (diferencaDias <= 30) {
      throw new Error(`Última consula realizada há ${diferencaDias} dias`);
    }
  }

  const montante = calculaValor.calcularMontante(valor, juros, parcelas);
  const prestacoes = calculaValor.calcularPrestacoes(montante, parcelas);

  mockdb.novaConsulta(CPF);

  return {
    montante,
    juros,
    parcelas: prestacoes.length,
    primeiraPrestacao: prestacoes[0],
    prestacoes,
  };
};

module.exports = {
  consultar,
};
