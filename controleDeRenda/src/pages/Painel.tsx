import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const tabelaNames = 'http://localhost:3004/tabela';
const tabelaInfoUrl = 'http://localhost:3004/tabela/info';

export default function Painel() {
  const [allUsers, setAllUsers] = useState([]);
  const [nome, setNome] = useState('');
  const [valorTotal, setValorTotal] = useState(0);

  useEffect(() => {
    const returnAllUsers = async () => {
      try {
        const rAllUsers = await axios.get(tabelaNames);
        setAllUsers(rAllUsers.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchValorTotal = async () => {
      try {
        const response = await axios.get(tabelaInfoUrl);
        const valorTotal = calcularValorTotal(response.data);
        setValorTotal(valorTotal);
      } catch (error) {
        console.log(error.message);
      }
    };

    returnAllUsers();
    fetchValorTotal();
  }, []);

  const handleChange = (event) => {
    setNome(event.target.value);
  };

  const calcularValorTotal = (data) => {
    let total = 0;
    data.forEach((info) => {
      total += info.quantidade * info.valor;
    });
    return total;
  };

  const filteredUsers = allUsers.filter((user) =>
    user.nome.toLowerCase().includes(nome.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/home">
          <button className="btn btn-primary"><strong>VOLTAR</strong></button>
        </Link>
        <h3>Valor Total: R$ {valorTotal.toFixed(2)}</h3>
      </div>
      <div>
        <input type="text" value={nome} onChange={handleChange} placeholder="Digite o nome" />
      </div>
      {filteredUsers.map((info) => (
        <div key={info.id} className="card">
          <div className="card-body">
            <h5 className="card-title">{info.nome}</h5>
            <Link to={`/painel/${info.tabela_id}`} className="btn btn-primary">Detalhes</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
