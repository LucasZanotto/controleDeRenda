import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Criar() {
  const [nome, setNome] = useState('');
  const history = useHistory();

  const handleChange = (e) => {
    setNome(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nome) {
      try {
        // Fazer a requisição POST para salvar a tabela no banco de dados
        await axios.post('http://localhost:3004/tabela', {
          nome: nome,
        });

        // Redirecionar para a URL "/painel"
        history.push('/painel');
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4">
        <h1 className="text-center mb-4">Criar Tabela</h1>
        <Link to="/home">
          <button className="btn btn-primary mb-3"><strong>VOLTAR</strong></button>
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nome" className="form-label">Nome</label>
            <input
              type="text"
              className="form-control"
              id="nome"
              value={nome}
              onChange={handleChange}
            />
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={!nome}
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
