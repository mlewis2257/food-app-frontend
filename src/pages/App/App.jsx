import axios from "axios";
import { useEffect, useState } from "react";
import NavbarReact from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "../Homepage/Homepage";
import GroupsTest from "../GroupsTest/GroupsTest";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  // const [user, setUser] = useState();
  return (
    <main className="App">
      <NavbarReact />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/groups" element={<GroupsTest />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
