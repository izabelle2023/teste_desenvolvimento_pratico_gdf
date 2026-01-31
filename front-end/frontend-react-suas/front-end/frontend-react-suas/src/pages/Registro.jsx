import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Registro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (nome && email && senha) {
      alert("Cadastro realizado com sucesso!");
      navigate("/");
    } else {
      alert("Preencha todos os campos.");
    }
  }

  return (
    <div className="container-lg mt-5" style={{ maxWidth: 400 }}>
      <h1 className="text-center mb-4">Registro</h1>

      <form className="br-form" onSubmit={handleSubmit}>
        <div className="br-input mb-3">
          <label htmlFor="nome">Nome</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>

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

        <button className="br-button primary w-100" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
}
