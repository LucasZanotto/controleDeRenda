const tabelaService = require('../services/tabelaService');

const postTabela = async (req, res) => {
  const result = await tabelaService.postTabela(req.body);
  return res.status(200).json({message: 'movel created successfully'})
};

const getAllTabelas = async (req, res) => {
  const result = await tabelaService.getAllTabelas();
  return res.status(200).json(result)
};

const postTabelaInfo = async (req, res) => {
  const result = await tabelaService.postTabelaInfo(req.body);
  return res.status(200).json({message: 'movel created successfully'})
};

const getAllTabelaInfos = async (req, res) => {
  const result = await tabelaService.getAllTabelaInfos();
  return res.status(200).json(result)
};

const getIdTabelaInfos = async (req, res) => {
  const { id } = req.params;
  const result = await tabelaService.getIdTabelaInfos(id);
  return res.status(200).json(result)
};

module.exports = {
  postTabela,
  getAllTabelas,
  postTabelaInfo,
  getAllTabelaInfos,
  getIdTabelaInfos
};