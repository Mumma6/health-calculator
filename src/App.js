import React from 'react';
import Navbar from "./Components/Navbar";
import Info from './Components/Info';
import Contact from "./Components/Contact";
import Jumbotron from "./Components/Jumbotron"

import CalorieIntake from "./Components/ActivityLevel";

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Info />
      <CalorieIntake />
      <Contact />
    </div>
  );
}

export default App;
