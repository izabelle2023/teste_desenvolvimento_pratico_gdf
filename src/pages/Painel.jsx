import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { usuariosCadastrados } from "./Registro"; // import nomeado agora funciona

export default function Painel() {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      alert("Você precisa estar logado para acessar o Painel!");
      navigate("/"); // redireciona para página de Acesso
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="br-content" style={{ padding: "2rem" }}>
      <h1>Painel</h1>
      <p>Lista de usuários registrados:</p>

      {usuariosCadastrados.length === 0 ? (
        <p>Nenhum usuário registrado ainda.</p>
      ) : (
        <table className="br-table" style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
          <thead>
            <tr>
              <th>E-mail</th>
              <th>Data de Nascimento</th>
            </tr>
          </thead>
          <tbody>
            {usuariosCadastrados.map((usuario, index) => (
              <tr key={index}>
                <td>{usuario.email}</td>
                <td>{usuario.dataNascimento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
