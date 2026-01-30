import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="br-header">
      <div className="container-lg d-flex justify-content-between align-items-center">
        
        {/* Logo */}
        <div className="d-flex align-items-center">
          <img
            src="/logo_gov.png"
            alt="Logo Rede SUAS"
            style={{ height: "40px", marginRight: "1rem" }}
          />
        </div>

        {/* Navegação estilizada */}
        <nav className="govbr-nav">
          <Link to="/" className="govbr-link">Acesso</Link>
          <Link to="/registro" className="govbr-link">Registro</Link>
          <Link to="/painel" className="govbr-link">Painel</Link>
        </nav>
      </div>
    </header>
  );
}
