import React, { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logoGov from "../img/logo_gov.png";
import logoRede from "../img/logo_rede_suas.png";

export default function Header() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/"); // redireciona para Acesso
  };

  const handleProtectedClick = () => {
    if (!isAuthenticated) {
      alert("Você precisa fazer login para acessar o Painel!");
      navigate("/"); // redireciona para Acesso
    }
  };

  return (
    <header className="govbr-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem 2rem", borderBottom: "1px solid #dcdcdc", flexWrap: "wrap" }}>
      
      {/* LOGOS */}
      <div className="govbr-logo" style={{ display: "flex", alignItems: "center" }}>
        <img src={logoGov} alt="GOV.BR" style={{ height: "40px", marginRight: "0.5rem" }} />
        <img src={logoRede} alt="Rede SUAS" style={{ height: "40px" }} />
      </div>

      {/* NAVEGAÇÃO */}
      <nav className="govbr-nav" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
        {!isAuthenticated ? (
          <>
            <Link to="/">Acesso</Link>
            <Link to="/registro">Registro</Link>
            <button 
              onClick={handleProtectedClick} 
              style={{ background: "none", border: "none", color: "#005ea5", cursor: "pointer", padding: 0, fontWeight: 500 }}
            >
              Painel
            </button>
          </>
        ) : (
          location.pathname === "/painel" && (
            <>
              <Link to="/painel">Painel</Link>
              <button 
                onClick={handleLogout} 
                style={{ background: "none", border: "none", color: "#005ea5", cursor: "pointer", padding: 0, fontWeight: 500 }}
              >
                Encerrar Sessão
              </button>
            </>
          )
        )}
      </nav>

    </header>
  );
}
