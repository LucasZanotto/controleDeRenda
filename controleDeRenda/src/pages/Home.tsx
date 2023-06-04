import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column vh-100">
      <h1 className="text-center"></h1>
      <div className="d-flex justify-content-center">
        <Link to="/painel">
          <button className="btn btn-primary mx-2 w-20"><strong>MOSTRAR TABELAS</strong></button>
        </Link>
        <Link to="/criar">
          <button className="btn btn-primary mx-2 w-20"><strong>CRIAR TABELAS</strong></button>
        </Link>
      </div>
    </div>
  );
}
