const express = require('express');
const tabelaController = require('../controllers/tabelaController');

const router = express.Router();

router.get('/', tabelaController.getAllTabelas);
router.post('/', tabelaController.postTabela);
router.get('/info', tabelaController.getAllTabelaInfos);
router.post('/info', tabelaController.postTabelaInfo);
router.get('/info/:id', tabelaController.getIdTabelaInfos);

module.exports = router;