import React from 'react';
import { Link } from 'react-router-dom';

export default function Tabelas() {
  return (
    <div>
      <div className="d-flex align-items-center">
      <Link to="/home">
        <button className="btn btn-primary"><strong>VOLTAR</strong></button>
      </Link>
      <h1 className="text-center flex-grow-1">Tabela de Maio</h1>
    </div>
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
          <tr>
            <td>28/05/23</td>
            <td>Ração</td>
            <td>709870987</td>
            <td>2</td>
            <td>99,90</td>
            <td>{99.90 * 2}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
