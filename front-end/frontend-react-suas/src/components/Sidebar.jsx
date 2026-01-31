import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();          // encerra a sessão
    navigate("/");      // redireciona para Acesso
  };

  const handleProtectedClick = () => {
    if (!isAuthenticated) {
      alert("Você precisa fazer login para acessar o Painel!");
      navigate("/"); // redireciona para Acesso
    }
  };

  return (
    <aside className="br-sidebar" style={{ width: "220px", backgroundColor: "#f0f0f0", padding: "1.5rem", borderRight: "1px solid #dcdcdc" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {!isAuthenticated && (
          <>
            <li><Link to="/">Acesso</Link></li>
            <li><Link to="/registro">Registro</Link></li>
            <li>
              <button 
                onClick={handleProtectedClick} 
                style={{ background: "none", border: "none", color: "#005ea5", cursor: "pointer", padding: 0, fontWeight: 500 }}
              >
                Painel
              </button>
            </li>
          </>
        )}

        {isAuthenticated && (
          <>
            <li>
              <button 
                onClick={handleLogout} 
                style={{ background: "none", border: "none", color: "#005ea5", cursor: "pointer", padding: 0, fontWeight: 500 }}
              >
                Encerrar Sessão
              </button>
            </li>
          </>
        )}
      </ul>
    </aside>
  );
}
