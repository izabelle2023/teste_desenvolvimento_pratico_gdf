// src/pages/Acesso.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Acesso() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && senha) {
      login();            // autentica o usuário
      navigate("/painel"); // redireciona para Painel
    } else {
      alert("Preencha e-mail e senha.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h1>Acesso</h1>
      <form className="br-form" onSubmit={handleSubmit}>
        <div className="br-input mb-3">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="br-input mb-4">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="br-button primary">
          Acessar
        </button>
      </form>
    </div>
  );
}
