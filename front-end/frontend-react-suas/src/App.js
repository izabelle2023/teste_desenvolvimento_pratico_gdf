import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import Acesso from "./pages/Acesso";
import Registro from "./pages/Registro";
import Painel from "./pages/Painel";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Acesso />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/painel" element={<Painel />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
