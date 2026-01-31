import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Acesso from "./pages/Acesso";
import Registro from "./pages/Registro";
import Painel from "./pages/Painel";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Acesso />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/painel" element={<Painel />} />
        </Routes>
      </Layout>
    </Router>
  );
}
