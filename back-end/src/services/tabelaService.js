const tabelaModel = require('../models/tabelaModel');

const postTabela = async (body) => {
  const result = tabelaModel.createTabela(body);
  return result;
}

const getAllTabelas = async () => {
  const result = tabelaModel.findAllTabela();
  return result;
}

const postTabelaInfo = async (body) => {
  const result = tabelaModel.createTabelaInfo(body);
  return result;
}

const getAllTabelaInfos = async () => {
  const result = tabelaModel.findAllTabelaInfo();
  return result;
}

const getIdTabelaInfos = async (id) => {
  const result = tabelaModel.findIdTabelaInfo(id);
  return result;
}

module.exports = {
  postTabela,
  getAllTabelas,
  postTabelaInfo,
  getAllTabelaInfos,
  getIdTabelaInfos
};