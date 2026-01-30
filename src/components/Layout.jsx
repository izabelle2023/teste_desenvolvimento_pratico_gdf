import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <div className="br-main" style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>
        <Sidebar />
        <main className="br-content" style={{ flex: 1, padding: "2rem" }}>
          {children}
        </main>
      </div>
    </div>
  );
}
