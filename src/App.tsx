import React from "react";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { LandingPage } from "./pages/LandingPage";

import "./styles/style.scss";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <LandingPage />
    </div>
  );
}

export default App;
