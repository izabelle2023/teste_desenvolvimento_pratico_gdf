import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Exportamos o array para o Painel poder usar
export const usuariosCadastrados = [
  { email: "joao@email.com", dataNascimento: "2000-01-01" },
  { email: "maria@email.com", dataNascimento: "1995-05-10" },
];

export default function Registro() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioExistente = usuariosCadastrados.find(
      (usuario) => usuario.email.toLowerCase() === email.toLowerCase()
    );

    if (usuarioExistente) {
      alert("Usuário já registrado. Entre em contato com o administrador.");
      return;
    }

    if (email && dataNascimento && senha) {
      usuariosCadastrados.push({ email, dataNascimento, senha });
      alert("Cadastro realizado com sucesso!");
      navigate("/"); // redireciona para Acesso
    } else {
      alert("Preencha todos os campos.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "0 auto" }}>
      <h1>Registro</h1>
      <form className="br-form" onSubmit={handleSubmit}>
        <div className="br-input mb-3">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="br-input mb-3">
          <label htmlFor="dataNascimento">Data de Nascimento</label>
          <input
            id="dataNascimento"
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </div>

        <div className="br-input mb-4">
          <label htmlFor="senha">Senha</label>
          <input
            id="senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="br-button primary">
          Registrar
        </button>
      </form>
    </div>
  );
}
