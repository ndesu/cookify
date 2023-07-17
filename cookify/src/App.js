import Ingredients from './components/Ingredients';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar';
import React, { useEffect, useState } from "react";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Ingredients></Ingredients>
    </div>
  );
}

export default App;
