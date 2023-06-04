import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function PainelDetail() {
  const [tabelaInfo, setTabelaInfo] = useState([]);
  const [novaInfo, setNovaInfo] = useState({
    data: '',
    nome: '',
    nota: '',
    quantidade: '',
    valor: '',
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchTabelaInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:3004/tabela/info/${id}`);
        setTabelaInfo(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchTabelaInfo();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNovaInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:3004/tabela/info', {
        ...novaInfo,
        tabela_id: id,
      });
      const response = await axios.get(`http://localhost:3004/tabela/info/${id}`);
      setTabelaInfo(response.data);
      setNovaInfo({
        data: '',
        nome: '',
        nota: '',
        quantidade: '',
        valor: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Função para calcular o valor total
  const calcularValorTotal = () => {
    let total = 0;
    tabelaInfo.forEach((info) => {
      total += info.quantidade * info.valor;
    });
    return total;
  };

  const isFormValid = Object.values(novaInfo).every((value) => value !== '');

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/home">
          <button className="btn btn-primary"><strong>VOLTAR</strong></button>
        </Link>
        <h1 className="text-center flex-grow-1">Tabela de Valores</h1>
        <h3>Valor Total: R$ {calcularValorTotal().toFixed(2)}</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col">
            <input
              type="text"
              name="data"
              placeholder="Data"
              value={novaInfo.data}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              value={novaInfo.nome}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <input
              type="text"
              name="nota"
              placeholder="Nota"
              value={novaInfo.nota}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="quantidade"
              placeholder="Quantidade"
              value={novaInfo.quantidade}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <input
              type="number"
              name="valor"
              placeholder="Valor"
              value={novaInfo.valor}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>
          <div className="col">
            <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
              Adicionar
            </button>
          </div>
        </div>
      </form>
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>DATA</th>
            <th>NOME</th>
            <th>NOTA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {tabelaInfo.map((info) => (
            <tr key={info.id}>
              <td>{info.data}</td>
              <td>{info.nome}</td>
              <td>{info.nota}</td>
              <td>{info.quantidade}</td>
              <td>{info.valor}</td>
              <td>{info.quantidade * info.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
