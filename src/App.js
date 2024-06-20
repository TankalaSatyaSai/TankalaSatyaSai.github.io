import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import Education from "./components/Education";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import PricingTable from "./components/PricingTable"; // Import the PricingTable component
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Responsibilities from "./components/Responsibilities";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Education />
      <Skills />
      <PricingTable />
      <Responsibilities/>
      <Projects />
      
      <Footer />
    </div>
  );
}

export default App;
