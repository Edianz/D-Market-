import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Hommes from "./pages/Hommes";
import Femmes from "./pages/Femmes";
import Accessoires from "./pages/Accessoires";
import Baskets from "./pages/Baskets";
import Panier from "./pages/Panier";

const App = () => {
  return (
    <Router>
      <header style={styles.header}>
        <h1 style={{ color: "#2a9d8f" }}>D-Market</h1>
        <nav>
          {["Accueil", "Hommes", "Femmes", "Accessoires", "Baskets", "Panier"].map((page) => (
            <NavLink
              key={page}
              to={page === "Accueil" ? "/" : `/${page.toLowerCase()}`}
              style={({ isActive }) => ({
                margin: "0 10px",
                textDecoration: "none",
                color: isActive ? "#2a9d8f" : "#333",
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              {page}
            </NavLink>
          ))}
        </nav>
      </header>
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/hommes" element={<Hommes />} />
          <Route path="/femmes" element={<Femmes />} />
          <Route path="/accessoires" element={<Accessoires />} />
          <Route path="/baskets" element={<Baskets />} />
          <Route path="/panier" element={<Panier />} />
        </Routes>
      </main>
      <footer style={styles.footer}>
        <p>© 2025 D-Market | Avec D-Market, chaque jour a du style</p>
      </footer>
    </Router>
  );
};

const styles = {
  header: {
    backgroundColor: "#e0f2f1",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    backgroundColor: "#e0f2f1",
    textAlign: "center",
    padding: "10px",
    marginTop: "30px",
  },
};

export default App;
  
