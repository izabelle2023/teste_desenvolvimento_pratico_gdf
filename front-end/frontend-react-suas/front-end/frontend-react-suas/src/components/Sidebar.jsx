import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{
      width: "220px",
      background: "#F8F9FA",
      padding: "16px",
      minHeight: "100vh"
    }}>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/">Acesso</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/painel">Painel</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
