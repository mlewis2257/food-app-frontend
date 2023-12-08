import axios from "axios";
import { useEffect, useState } from "react";
import NavbarReact from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  // const [user, setUser] = useState();
  return (
    <main className="App">
      <NavbarReact />
      <Routes></Routes>
      <Footer />
    </main>
  );
}

export default App;
