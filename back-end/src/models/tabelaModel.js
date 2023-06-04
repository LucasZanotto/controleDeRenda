const connection = require('./connection');

const createTabela = async ({nome}) => {
  const query = `INSERT INTO controleDeRenda.tabela(nome) VALUES (?)`;
  const [result] = await connection.execute(query, [nome])
}

const findAllTabela = async () => {
  const query = 'SELECT * FROM controleDeRenda.tabela';
  const [result] = await connection.execute(query);
  return result;
}

const createTabelaInfo = async ({data, nome, nota, quantidade, valor, tabela_id}) => {
  const query = `INSERT INTO controleDeRenda.tabelaInfo(data, nome, nota, quantidade, valor, tabela_id) VALUES (?, ?, ?, ?, ?, ?)`;
  const [result] = await connection.execute(query, [data, nome, nota, quantidade, valor, tabela_id])
}

const findAllTabelaInfo = async () => {
  const query = 'SELECT * FROM controleDeRenda.tabelaInfo';
  const [result] = await connection.execute(query);
  return result;
}

const findIdTabelaInfo = async (id) => {
  const query = `SELECT * FROM controleDeRenda.tabelaInfo WHERE tabela_id = ${id}`;
  const [result] = await connection.execute(query);
  return result;
}

module.exports = {
  findAllTabela,
  createTabela,
  createTabelaInfo,
  findAllTabelaInfo,
  findIdTabelaInfo
};